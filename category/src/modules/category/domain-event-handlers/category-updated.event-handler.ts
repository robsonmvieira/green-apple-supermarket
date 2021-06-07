import amqplib from 'amqplib'
import process from 'process'

import { IOnCategoryUpdatedDomainEventHandler } from '@core/domain-events/domain-event-category-updated-handler.interface'
import { MessageTypes } from '@core/types/message-types.broker'

import { CategoryCreatedDomainEvent } from '../domain/events/category-created.domain-event'

const rabbitSettings = {
  protocol: process.env.MESSAGE_PROTOCOL,
  hostname: process.env.MESSAGE_HOST_NAME,
  port: Number(process.env.MESSAGE_PORT),
  username: process.env.MESSAGE_USER_NAME,
  password: process.env.MESSAGE_PASSWORD,
  vhost: process.env.MESSAGE_VHOST,
  authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}

export class OnCategoryUpdatedDomainEventHandler
  implements IOnCategoryUpdatedDomainEventHandler
{
  async onCategoryUpdated(event: CategoryCreatedDomainEvent): Promise<void> {
    const type = MessageTypes.CATEGORYUPDATED

    const {
      data: { id, name },
      dateOccured
    } = event
    const queue = 'category-updated'
    const category = { dateOccured, type, id, name }
    try {
      const connect = await amqplib.connect(rabbitSettings)
      const channel = connect.createChannel()
      const result = (await channel).assertQueue(queue)
      await (
        await channel
      ).sendToQueue(queue, Buffer.from(JSON.stringify(category)))
    } catch (error) {
      console.error(`error => `, error)
    }
  }
}
