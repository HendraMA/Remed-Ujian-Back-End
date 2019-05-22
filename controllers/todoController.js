const db = require('./../database')

module.exports = {
    addTodo : (req,res) => {
        console.log(req.body)
        var sql = `insert into to_do (user, to_do) values (${req.body.user}, '${req.body.to_do}');`
        db.query(sql , (err,result) => {
            if(err) throw err
            var sql2 = `select to_do.id, username, to_do from to_do
                        join users on id_user = users.id;`
            db.query(sql2, (err,result1)=>{
                if(err) throw err
                res.send(result1)
            })
        })
    },
    deleteTodo : (req,res) => {
        var id = req.params.id
        var sql = `DELETE FROM to_do WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err
            res.send('Berhasil di delete')
        })
    },
    getTodoFilterByUser : (req,res) => {
        var user = req.params.user
        var sql = `FILTER FROM to_do WHERE user=${user}`
        db.query(sql,(err,result) => {
            if(err) throw err
            res.send('Berhasil di filter')
        })
    },
    getTodoFilterByHari : (req,res) => {
        var hari = req.params.hari
        var sql = `FILTER FROM to_do WHERE hari=${hari}`
        db.query(sql,(err,result) => {
            if(err) throw err
            res.send('Berhasil di filter')
        })
    },
    getAllTodo : (req,res) => {
        var sql = `select to_do.id, username, to_do from to_do
                   join user on id_user = user.id;`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    }
}