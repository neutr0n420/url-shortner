const express = require('express')
// import { nanoid } from 'nanoid'
const connectClient = require('redis')

const app = express()

const PORT = 6969

app.use(express.json())


// const nanoId = nanoid()

// app.get('/', (request, response)=>{
    
// })

//adding this to new file the below function should be in "./utils/generatePassword"

const string = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u", "v", "w", "x","y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const genrateRandomString = (length) =>{
    let string1 = ""
    // This for loop should do is genrate any random number which we can pick form the above given arrey of stirng
    for(let i = 0; i< length; i++){
        let number = Math.floor(Math.random()*52);
         let char = string[number]
         string1 = string1 + char
     }
     console.log(string1)
return string1
}

//initlizing the Redis client
// const client = createClient()
const client = connectClient.createClient()


app.get('/healthcheck', (request, response)=>{
    response.status(200).send("server is running ok ok")
})


app.post('/api/shortenurl',(request, resposne)=>{
    let input = request.body
    console.log(input)
    console.log(genrateRandomString(5))
    resposne.status(200).send(JSON.stringify(input))
})


app.listen(PORT, console.log(`App is running on ${PORT} port `))