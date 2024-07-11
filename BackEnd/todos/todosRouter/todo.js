import express from "express";
import { getTodos , addTodo , updateTodo , deleteTodo} from "../todosController/todo.js";
// import { register } from "../auth_controller/register.js";
// import { login } from "../auth_controller/login.js";

const todoRouter = express.Router();

todoRouter.post("/add_todo", addTodo);
todoRouter.get("/get_todo", getTodos);
todoRouter.put("/update_todo:id", updateTodo);
todoRouter.delete("/delete_todo:id", deleteTodo);

export { todoRouter };
