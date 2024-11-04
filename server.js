import express from "express"
import {config} from "dotenv"
import mongoose from "mongoose"
import {router} from "./routes/index.js"
import { application,db } from "./config/index.js"
config()

const app = express()

app.use(express.json())
app.set("view engine","ejs")
app.use(express.static("public"))

try {
    connect(db.uri);
    mongoose.connection.on("connected", () => console.log("connected"));
  } catch (error) {
    mongoose.connection.on("error", (err) => {
      console.error(err);
    });
}
  
app.use("/auth", router);
  
app.use((req, res, next) => {
  res.status(500).send("Something broke!");
});

const port = process.env.PORT

app.listen(application.port,() => {
    console.log(`server is running on port: ${application.port}`)
})