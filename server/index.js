const express = require('express')
const cors = require('cors')
const session = require('express-session')
const SQL = require('./dbconfig')



//inits 
const app = express()
const corsOption = {
    origin: "http://localhost:4200",
    credentials: true
}
const sessionOption = {
    secret: "theHolySecretWord",
    name: "session",
    saveUninitializer: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}
app.use(express.json())
app.use(cors(corsOption))
app.use(session(sessionOption))

app.use('/users', require('./routes/users'))
app.use('/products',require('./routes/products'))

app.listen(1002, _ => console.log("Server is up"))