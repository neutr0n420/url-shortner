import express, { request, response } from "express";
import genrateRandomString from "./utils/randomString.js";
import CreateClient from "./utils/redis.js";

const app = express();

const PORT = 6969;
app.use(express.json());
app.get("/", (request, response) => {
  response.status(200).send("Server is running fine");
});
app.post("/api/shortenurl", async (request, response) => {
  const input = request.body;
  console.log(genrateRandomString(5));

//   await CreateClient().connect()
  await CreateClient().set('key', 'aryan')
  const value = await CreateClient().get("key");
  console.log(value)
  response.status(200).send();
});

app.listen(PORT, console.log(`App is listning on http://localhost:${PORT}`));
