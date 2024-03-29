const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./routes/index')

const app = express()

app.set('view engine', 'html')

nunjucks.configure('views', {
    express: app,
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended : false}))
app.use(router)

app.listen(3000, ()=> {
    console.log(`server start`)
})