/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import { createConnection } from 'typeorm'

createConnection()
// import database from '../configs/database.config'

// // async () => {
// //    await createConnection({ ...database })
// // }
// createConnection({ ...database })
//   .then(async () => {
//     console.log('connection established')
//   })
//   .catch(error => {
//     console.error('error => ', error)
//   })
// // const connection = await createConnection({
// //   type: 'mysql',
// //   host: 'localhost',
// //   port: 3306,
// //   username: 'test',
// //   password: 'test',
// //   database: 'test'
// // })
