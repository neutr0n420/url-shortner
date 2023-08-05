import express, { request, response } from "express"
import genrateRandomString from "./utils/randomString.js"
import { createClient } from 'redis';
const app = express()


const PORT =6969
app.use(express.json())
app.get('/',(request, response)=>{

    response.status(200).send("Server is running fine")
})
app.post('/api/shortenurl', async (request, response)=>{
    const input = request.body
    console.log(genrateRandomString(5))
    const client = createClient({
        url: 'redis-18082.c93.us-east-1-3.ec2.cloud.redislabs.com:18082',
      });
      
      client.on('error', err => console.log('Redis Client Error', err));
      
      await client.connect();
      
    response.status(200).send(value)
})

app.listen(PORT, console.log(`App is listning on http://localhost:${PORT}`))