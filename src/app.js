const express = require('express')
const cors = require('cors')
const routes = require('../routes')
const app = express()


app.use(cors)
app.use(express.json())
app.use(routes)

app.listenerCount(3024, () => {
    console.log("Executed on 3024 dor")
})

