const todoRoutes = (app) => {
    const todos = require("../controllers/todo.controller");
    var router = require("express").Router();
    router.get("/", todos.getTodos);
    router.post("/", todos.saveTodo);
    router.put("/:id", todos.updateTodo);
    router.delete("/:id", todos.deleteTodo);
    app.use("/api/todos", router);
};

module.exports = { todoRoutes };