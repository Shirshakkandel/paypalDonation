import database from '@middlewares/database'
import Donation from '@models/donation'
import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect, { NextHandler } from 'next-connect'

const handler = nextConnect()
handler.use(database)

handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const donations = await Donation.find({}).sort('-createdAt').limit(5)
      res.status(200).json(donations)
    } catch (error) {
      console.log(error.message)

      res.status(500).json({ message: 'Server Error' })
    }
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const donation = new Donation(req.body)
      console.log(donation)
      await donation.save()
      res.status(201).json(donation)
    } catch (error) {
      console.log(error.message)

      res.status(500).json({ message: 'Server Error' })
    }
  })
export default handler
