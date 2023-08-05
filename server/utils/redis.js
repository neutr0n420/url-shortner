import {createClient} from "redis";

const CreateClient = () =>{
    const client = createClient({
        url: process.env.REDIS_HOST,
        password: process.env.REDIS_PASSWORD,
    })
    client.on("error", (err)=> console.log("Redis Client Error", err))
    client.connect() 
    return client
}

export default CreateClient