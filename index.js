import express from 'express'
import 'dotenv/config'
import router from './routes/index.js'
import db from './config/mongoose.js'

const port = 4001
const app = express()

//use express router
app.use('/', router)

/* RUN SERVER */
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server : ${err}`)
  }

  console.log(`Server is running on port: ${port}`)
})
