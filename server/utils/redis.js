import {createClient} from "redis"

 const CreateClient = () =>{
    const client = createClient({
        username:'default',
        password: process.env.REDIS_PASSWORD,
        socket:{
            host: process.env.REDIS_HOST,
            port: 18082,
        }
    })
    return client
}
export default CreateClient