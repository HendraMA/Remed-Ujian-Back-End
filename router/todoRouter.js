const router = require('express').Router()
const { addTodo, deleteTodo, getTodoFilterByUser, getTodoFilterByHari, getAllTodo } = require('./../controllers').todoController


router.post('/addTodo', addTodo)
router.post('/filterByUser', getTodoFilterByUser)
router.post('/filterByHari', getTodoFilterByHari)
router.delete('/delete/:id', deleteTodo)
router.get('/getAll', getAllTodo)

module.exports = router