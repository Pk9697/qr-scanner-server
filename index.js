import express from 'express'

const port = 4001
const app = express()

/* RUN SERVER */
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server : ${err}`)
  }

  console.log(`Server is running on port: ${port}`)
})
