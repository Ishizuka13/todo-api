import { Request, Response } from "express";
import { task } from "../models/task";

class Task {
  async createTask(req: Request, res: Response): Promise<void> {
    const description = req.body.description;

    const newTask = { checked: false, description };

    await task.create(newTask);

    res.json({ newTask });
  }
  async getTasks(req: Request, res: Response) {
    const tasks = await task.find({});

    res.json({ tasks });
  }

  async editTask(req: Request, res: Response) {
    const id = req.params.id;
    const { checked, description } = req.body;

    const editedTask = { checked, description };

    await task.findOneAndUpdate(
      { _id: id },
      {
        ...editedTask,
      }
    );

    // if (checked) {
    //   editTask.checked = checked;
    // }
    // if (description) {
    //   editTask.description = description;
    // }

    // editTask.save();
    res.json({ message: "Task alterada com sucesso!", checked, description });
  }

  async deleteTask(req: Request, res: Response) {
    const id = req.body.id;

    await task.findOneAndDelete(id);

    res.json({ message: "Task deletada com sucesso!" });
  }
}

export default Task;
