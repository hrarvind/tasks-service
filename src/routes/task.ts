import Router, { Request, Response } from 'express';
import {
    createTaskHandler,
    getAllTasksHandler
  } from "../controller/tasks.controller";
import validateTaskBody from 'middleware/validateTaskBody';

const router = Router();

// @route GET /task
// @description task CRUD operations
// @access PUBLIC
router.get("/", getAllTasksHandler);
router.post("/", function(req, res){
    console.log(JSON.stringify(req.body));
    res.send(req.body);
  });
  router.put("/", function(req, res){
    console.log(JSON.stringify(req.body));
    res.send(req.body);
  });

export default router;
