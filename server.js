const express= require('express') 
const connectDb=require('./config/connectDb.js')
const contactRoute = require('./routes/contact.js')

require("dotenv").config()



const app= express()
connectDb()
app.use (express.json())
app.use("/api/contacts",contactRoute)









app.listen(process.env.port,()=>console.log(`port is running on port ${process.env.port}`))