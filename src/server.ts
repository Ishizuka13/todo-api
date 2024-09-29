import express, { Request, Response, Router } from "express";
import Task from "./controllers/taskController";

import "dotenv/config";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB().then(() => console.log("conectado"));

const server = Router();

const TaskController = new Task();

server.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "FUNCIONA" });
});

server.get("/task", TaskController.getTasks);
server.post("/task", TaskController.createTask);
server.put("/task/:id", TaskController.editTask);
server.delete("/task/:id", TaskController.deleteTask);

app.use(server);

app.listen(process.env.HOST_PORT as string, () =>
  console.log("Foi", { port: process.env.HOST_PORT as string })
);
