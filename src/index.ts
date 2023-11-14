import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

import { PORT } from '@/config'
import { instanceMongoDB as dbConnection } from '@/database'
import App from './app'
import { ErrorResponse } from '@/core'
dotenv.config()

const DELAY = 0

const StartServer = async () => {
  const app = express()

  app.use(function (req, res, next) {
    setTimeout(next, DELAY)
  })

  // CACHE for GET requests
  // app.use(function (req, res, next) {
  //   const period = 60 * 5
  //   if (req.method == 'GET') {
  //     res.set("Cache-control", `public, max-age=${period}`)
  //   } else {
  //     res.set("Cache-control", "no-store")
  //   }
  //   next()
  // })

  app.use(morgan('dev'))
  app.use(helmet())
  app.use(compression())
  app.use(cookieParser())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  await dbConnection.connect()
  await App(app)

  // Handling error
  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new ErrorResponse('Not Found', 'Not Found', 404)
    next(error)
  })

  app.use((error: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.code || 500
    return res.status(statusCode).json({
      status: error.status,
      code: statusCode,
      stack: error.stack,
      message: error.message || 'Internal Server Error'
    })
  })

  app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
  })
}

StartServer()
