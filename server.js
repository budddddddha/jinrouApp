'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _create = require('./routes/create');

var _create2 = _interopRequireDefault(_create);

var _linebot = require('./routes/linebot');

var _linebot2 = _interopRequireDefault(_linebot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.engine('ejs', _ejs2.default.renderFile);
app.set('view engine', 'ejs');

// view engine setup
app.set('views', _path2.default.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/', _index2.default);
app.use('/users', _users2.default);
app.use('/create', _create2.default);
app.use('/linebot/callback', _linebot2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;