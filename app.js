const express = require('express')
const fs = require('fs')

const app = express()

app.use((req, res, next) => {
  console.log("中间件");
  next()
})

app.get('/todos/:id',(req,res,next) => {
  fs.readFile('./db.json','utf8',(err,data) => {
    if (err) {
      next(err)
    }
    const db = JSON.parse(data)

    const todo = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
    if (!todo) {
      return res.status(404).end()
    }
    res.status(200).json(todo)
  })
})

app.post('/',(req,res) => {
  res.send('post test')
})

app.use((err,req,res,next) => {
  console.log("错误",err);
  res.status(500).json({
    error:err.message
  })
})

// 通常会在所有的路由之后配置处理404的内容
app.use((req,res,next) => {
  res.status(404).send('404 NOT FOUND')
})

app.listen(3000,()=>{
  console.log(`Server running at http://localhost:3000/`);
})