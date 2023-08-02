const express = require('express')

const app = express()

const PORT = 6969

// app.get('/', (request, response)=>{
    
// })

app.get('/healthcheck', (request, response)=>{
    response.status(200).send("Code is running ok ok")
})

app.listen(PORT, console.log(`App is running on ${PORT} port `))