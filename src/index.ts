import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

dotenv.config()

const app = express()

const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? 'localhost'
const protocol = process.env.PROTOCOL ?? 'http'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('common'))
app.use(helmet())

app.get('/health', (_: Request, res: Response) => {
  res.send('<h1>All OK 👌</h1>')
})

app.use((_: Request, res: Response) => {
  res.status(404).send('Resource not found')
})

app.listen(port, () => {
  console.log(`🚀 Server listening at ${protocol}://${host}:${port}`)
})
