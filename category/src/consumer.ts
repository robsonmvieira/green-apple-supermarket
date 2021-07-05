// import amqplib from 'amqplib'

// const rabbitSettings = {
//   protocol: 'amqp',
//   hostname: 'localhost',
//   port: 5672,
//   username: 'guest',
//   password: 'guest',
//   vhost: '/',
//   authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
// }

// connect()

// async function connect() {
//   const queue = 'categories'
//   try {
//     const connect = await amqplib.connect(rabbitSettings)
//     const channel = connect.createChannel()
//     const result = (await channel).assertQueue(queue)

//     await (
//       await channel
//     ).consume(queue, (category: any) => {
//       const categories = []
//       const cat = JSON.parse(category.content.toString())
//       categories.push(cat)
//       console.log(categories)
//     })
//   } catch (error) {
//     console.error(`error => `, error)
//   }
// }
