const express = require('express')
const connectDB = require('./config/connectDB')
const router = require('./route/contact')
const app = express()
app.use(express.json())
connectDB()
app.use('/api/exemple', router )

const port = 5000


   

app.listen(port , ()=>console.log(`the server is runnunig on port ${port}`))

 