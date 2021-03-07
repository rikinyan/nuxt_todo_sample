// write by node.js

// server setting
const express = require('express')
const server = express()
const jsonParser = require('body-parser').json()

// mysql setting
const mysql = require('mysql')
const tableName = 'nuxt_todo_list'
const connectionSetting = {
  host: 'localhost',
  user: 'nuxt-todo-list-user',
  password: 'NuxT-tOdO-list-password1234',
  database: 'nuxt_sample_table'
}

// dataformatter
const dataformat = require('dateformat')

server.get('/', function(req, res) {
  const connection = mysql.createConnection(connectionSetting)

  connection.connect(function(error) {
    if (error) {
      console.error('connection error')
      console.log(error)
      return
    }
  })

  connection.query(
    `select * from ${tableName}`,
    function (error, results) {
      if (!!error) {
        console.error('error occured. (get)')
        console.log(error)
        res.status(500)
        res.send({
          message: 'server error: can\'t get todos'
        })
        connection.end()
        return
      }

      res.status(200)
      res.send({
        todos: results
      })
      connection.end()
      return
    }
    
  )
})

server.get('/:id', function(req, res) {
  const connection = mysql.createConnection(connectionSetting)

  connection.connect(function(error) {
    if (error) {
      console.error('connection error')
      console.log(error)
      return
    }
  })

  connection.query(
    `select * from ${tableName} where id=${req.params.id}`,
    function (error, results) {
      if (!!error) {
        console.error('error occured. (get)')
        console.log(error)
        res.status(500)
        res.send({
          message: 'server error: can\'t get todos'
        })
        connection.end()
        return
      }

      res.status(200)
      res.send(results[0])
      connection.end()
      return
    }
    
  )
})

server.delete('/:id', function(req, res) {
  const connection = mysql.createConnection(connectionSetting)

  connection.connect(function(error) {
    if (error) {
      console.error('connection error')
      console.log(error)
      return
    }
  })

  connection.query(
    `delete from ${tableName} where id=${req.params.id}`,
    function (error, results) {
      if (!!error) {
        console.error('error occured. (get)')
        console.log(error)
        res.status(500)
        res.send({
          message: 'server error: can\'t get todos'
        })
        connection.end()
        return
      }

      res.status(200)
      res.send()
      connection.end()
      return
    }
    
  )
})

server.post('/', jsonParser, function(req, res) {
  
  const title = req.body.title
  const deadline = dataformat(new Date(req.body.deadline), 'yyyy-mm-dd')
  const detail = req.body.detail

  const connection = mysql.createConnection(connectionSetting)

  connection.connect(function(error) {
    if (error) {
      console.error('connection error')
      console.log(error)
      return
    }
  })
  
  connection.query(
    `insert into ${tableName} (title, deadline, detail) values ('${title}', '${deadline}', '${detail}')`,
    function (error, results) {
      if (!!error) {
        console.log('error occured. (get)')
        console.log(error)
        res.status(500)
        res.send({
          message: 'server error: can\'t get todos'
        })
        connection.end()
        return
      }

      res.status(200)
      res.send()
      connection.end()
      return
    }
  )
})

module.exports = server
