import "dotenv/config";
import express from "express";
import cors from "cors";
import server from "./src/server";
import connectDB from "./src/config/connectDB.ts";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB().then(() => console.log("conectado"));

app.use(server);

app.listen(process.env.HOST_PORT as string, () =>
  console.log("Foi", { port: process.env.HOST_PORT as string })
);
