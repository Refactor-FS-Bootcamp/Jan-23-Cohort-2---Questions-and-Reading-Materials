import express from 'express'
import mongoose from 'mongoose'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:admin@cluster0.oywxacc.mongodb.net/tinderDB'

//Middleware

//DB Config
mongoose.connect(connection_url)

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Refactor"))

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))