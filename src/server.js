const express = require('express')
const mongoose = require('mongoose')
const nunjucks = require('nunjucks')

class App {
  constructor () {
    this.express = express()
    this.dataBase()
    this.middlewares()
    this.routes()
  }
  dataBase () {
    mongoose.connect('mongodb://localhost:27017/blog', {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }
  middlewares () {
    this.express.use(express.json())
    nunjucks.configure('src/views', {
      autoescape: true,
      express: this.express,
      watch: true
    })
    this.express.use(express.urlencoded({ extended: false }))
    this.express.set('view engine', 'njk')
  }
  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
