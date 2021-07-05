import amqplib from 'amqplib'
import process from 'process'

import { IOnCategoryDeletedDomainEventHandler } from '@core/domain-events/domain-event-category-deleted-handler.interface'
import { MessageTypes } from '@core/types/message-types.broker'

import { CategoryDeletedDomainEvent } from '../domain/events/category-deleted.domain-event'

const rabbitSettings = {
  protocol: process.env.MESSAGE_PROTOCOL,
  hostname: process.env.MESSAGE_HOST_NAME,
  port: Number(process.env.MESSAGE_PORT),
  username: process.env.MESSAGE_USER_NAME,
  password: process.env.MESSAGE_PASSWORD,
  vhost: process.env.MESSAGE_VHOST,
  authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}

export class OnCategoryDeletedDomainEventHandler
  implements IOnCategoryDeletedDomainEventHandler
{
  async onCategoryDeleted(event: CategoryDeletedDomainEvent): Promise<void> {
    const type = MessageTypes.CATEGORYDELETED
    const {
      data: { id },
      dateOccured
    } = event
    const queue = 'delete-category'
    const category = { dateOccured, type, id }
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
