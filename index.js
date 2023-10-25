import express from 'express'
import 'dotenv/config'
import 'passport'
import 'passport-jwt'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/index.js'
import './config/mongoose.js'

const port = 4001
const app = express()

/* MIDDLEWARES */
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
// use express router
app.use('/', router)

/* RUN SERVER */
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server : ${err}`)
  }

  console.log(`Server is running on port: ${port}`)
})
