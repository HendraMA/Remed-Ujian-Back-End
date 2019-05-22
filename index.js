var server = require('express')
var bodyParser = require('body-parser')
var app = server()
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

const port = 2000
const { todoRouter, userRouter } = require('./router')

app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
})

app.use('/todo', todoRouter)
app.use('/user', userRouter)

app.listen(port, () => console.log('aktif di port ' + port))