import { quotes } from './libs/data'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Quote from './models/Quote'

//current folder+.env.local
dotenv.config({ path: __dirname + '/.env.local' })
//console.log(process.env.MONGODB_URI)

//1.DB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connected'))
  .catch((error) => console.log('DB connection Failed', error.message))

//2.import data
const importData = async () => {
  try {
    await Quote.deleteMany()
    await Quote.insertMany(quotes)
    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.log('Data not imported', error.message)
    process.exit(1)
  }
}

//3.Destory Data
const destoryData = async () => {
  try {
    await Quote.deleteMany()
    console.log('Data destoryed')
    process.exit()
  } catch (error) {
    console.log('Data not destoryed')
    process.exit(1)
  }
}

//Command
if (process.argv[2] == '-d') {
  destoryData()
} else {
  importData()
}
