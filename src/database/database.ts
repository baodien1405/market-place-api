import mongoose from 'mongoose'
import { MONGO_URI } from '@/config'

mongoose.set('strictQuery', true)
class Database {
  static instance: Database
  // constructor() {
  //   this.connect()
  // }

  async connect(type = 'mongodb') {
    try {
      await mongoose.connect(MONGO_URI, {
        maxPoolSize: 50
      })
      console.log('Number of connections::', mongoose.connections.length)
      console.log('Connect Database Success')
    } catch (error) {
      console.log('Error Connect!', error)
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

export const instanceMongoDB = Database.getInstance()
