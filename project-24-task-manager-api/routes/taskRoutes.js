const express = require("express");
const router = express.Router();
let tasks = require("../data/tasks");

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// GET task by id
router.get("/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
});

// CREATE new task
router.post("/", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// UPDATE (edit task title)
router.put("/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");

  task.title = req.body.title || task.title;
  res.json(task);
});

// TOGGLE completion status
router.patch("/:id/toggle", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");

  task.completed = !task.completed;
  res.json(task);
});

// DELETE task
router.delete("/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.send("Task deleted");
});

module.exports = router;
