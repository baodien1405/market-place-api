import mongoose from 'mongoose'

// eslint-disable-next-line no-useless-escape
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const isEmail = (email: string) => {
  return REGEX_EMAIL.test(email)
}

export const isMongoId = (id: string) => mongoose.Types.ObjectId.isValid(id)
