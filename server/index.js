import express, { request, response } from "express";
import genrateRandomString from "./utils/randomString.js";
import { createClient } from "redis";
// import CreateClient from "./utils/redis.js";

const app = express();

const PORT = 6969;
app.use(express.json());

const baseUrl = `http://localhost:6969`;


const client = createClient({
  password: 'S5nCNcbbORQD05Q2Nbqf2w4EYrCtAUJT',
  socket: {
      host: 'redis-18082.c93.us-east-1-3.ec2.cloud.redislabs.com',
      port: 18082
  }
});

app.get("/", (request, response) => {
  response.status(200).send("Server is running fine");
});

// setting the URL SHORTNER

app.post("/api/shortenurl", async (request, response) => {
  const orignalUrl = request.body;
  let randomLength = Math.floor(Math.random() * 10);
  let randomString = "";
  if (randomLength >= 4) {
    randomString = genrateRandomString(randomLength);
  } else {
    randomString = genrateRandomString(6);
  }
await client.connect()
await client.set(randomString, orignalUrl.orignalUrl )
const value = await client.get(randomString)
console.log(value)
  response.status(200).send(`${baseUrl}/${randomString}`);
});

app.get("/:url", async (request, response) => {
  const id = request.params.url;
  // console.log(id)
  client.connect()
  const orignalUrl = await client.get(id);
  console.log(orignalUrl);
  client.disconnect()
  
  // response.status(200).send(orignalUrl);
  response.redirect(orignalUrl)
});

app.listen(PORT, console.log(`App is listning on http://localhost:${PORT}`));
