
import { todoModal } from "../todosSchema/todo.js"

const getTodos = async (req, res) => {
    const getTodos = await todoModal.find();

    res.status(200).send({
        status: 200,
        message: "get todo successfully",
        getTodos
    })
}

const addTodo = async (req, res) => {
    console.log(req)
    if (!req.body.todo) {
        res.status(403).send({
            status: 403,
            message: "todo value required"
        })
    }
    else {
        const addtodo = await todoModal.create(req.body)
        res.status(200).send({
            status: 200,
            message: "add todo successfully"
        })
    }

}
const deleteTodo = async (req, res) => {
    const deleteTodo = await todoModal.findByIdAndDelete(req.params.id)
    if (!deleteTodo) {
        res.status(403).send({
            status: 403,
            message: "todo not exit"
        })
    } else {
        res.status(200).send({
            status: 200,
            message: "todo deleted successfully",
            deleteTodo
        })
    }

}
const updateTodo = async (req, res) => {
    if (!req.body.todo) {
        res.status(200).send({
            message: "updated value is required",
            status: 403
        })
    }
    else {
        try {
            const updatedTodo = await todoModal.findByIdAndUpdate(req.params.id, req.body)
            if (!updatedTodo) {
                res.status(404).send({
                    message: "todo not found ",
                    status: 404,
                    updatedTodo
                })
            } else {
                res.status(200).send({
                    status: 200,
                    message: "todo updated successfully",
                    updatedTodo
                })
            }
        } catch (error) {
            res.status(500).send({
                message: "internal server error",
                status: 500,
                error
            })
        }

    }

}
export { getTodos, addTodo, deleteTodo, updateTodo }