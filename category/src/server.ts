import {config} from 'dotenv'
import express from 'express'
import morgan from 'morgan'
config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))


const port = process.env.PORT

app.get('/', (req, res) => {

  res.status(200).json({ message: 'ok'})
})

app.listen(port, () => console.log('category api running on http://localhost:8001'))

