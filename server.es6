import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import ejs from 'ejs'

import index from './routes/index'
import users from './routes/users'
import create from './routes/create'
import linebot from './routes/linebot'

let app = express()


app.engine('ejs',ejs.renderFile)
app.set('view engine', 'ejs');

// view engine setup
app.set('views', path.join(__dirname, 'views'))

// uncomment after placing your favicon in /public
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist/public')))

app.use('/', index)
app.use('/users', users)
app.use('/create', create)
app.use('/linebot/callback', linebot)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
