const express = require('express')
const app = express()
require('dotenv').config()
const notesRoute = require('./routes/notesRoute')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const { connectDB } = require('./config/connectDB')

connectDB()
app.use(cors())

app.use('/', notesRoute)

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))