import { Request, Response, Router } from "express";
import Task from "./controllers/taskController";

const server = Router();

const TaskController = new Task();

server.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "FUNCIONA" });
});

server.get("/task", TaskController.getTasks);
server.post("/task", TaskController.createTask);
server.put("/task/:id", TaskController.editTask);
server.delete("/task/:id", TaskController.deleteTask);

export default server;
