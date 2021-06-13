import { Request, Response } from "express";
import { Task } from "model/task.model";
// import { get } from "lodash";
import {
    getAllTasks,
    createTask,
//   createPost,
//   findPost,
//   findAndUpdate,
//   deletePost,
} from "../service/task.service";

export async function createTaskHandler(req: Request, res: Response) {
  const body = req.body;
  console.log("BODY",JSON.stringify(body));
  const task = createTask({...body});
  return res.send({...task});
}

export async function getAllTasksHandler(req: Request, res: Response) {
    const tasks = await getAllTasks();
    return res.send(tasks);
}

