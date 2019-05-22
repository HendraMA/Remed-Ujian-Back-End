var db = require('./../database')

module.exports = {
    getAllUser : (req,res) => {
        var sql = 'select * from user;'
        db.query(sql, (err,result)=> {
            res.send(result)
        })
    },
    getUserByUsername : (req,res) => {
        var username = req.query.username
        var sql = 'select * from user where username = ?'
        db.query(sql,username, (err,result)=>{
            res.send(result)
            console.log("Berhasil Get dengan method post")
        })
    },
    getUserById : (req,res) => {
        var id = req.params.terserah
        var sql = `select * from user where id = ${id};`
        db.query(sql,(err,result)=>{
            res.send(result)
        })
    },
    addUser : (req,res) => {
        var data = req.body
        var sql = 'insert into user set ?;'
        db.query(sql,data, (err,result) => {
            if(err) throw err
            res.send('Add User Sukses')
        })
    }
}