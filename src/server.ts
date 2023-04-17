import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Ola");
});

app.listen(process.env.PORT, () => console.log("server is on"));

mongoose
  .connect(process.env.CONNECTMONGOOSE)
  .then(() => console.log("mongo in connected"))
  .catch((error) => console.log(error));
