import dbConnect from '@libs/connectDB'
import { NextHandler } from 'next-connect'

export default async function (_0, _1, next: NextHandler) {
  try {
    await dbConnect()
  } catch (error) {
    console.log('Database connection error', error.message)
  }
  next()
}
