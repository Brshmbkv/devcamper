import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const PORT = process.env.PORT || 8888;

const app = express()
app.use(express.json())



app.listen(PORT, () => {
  console.log(`Server running on ${PORT} ...`)
})

