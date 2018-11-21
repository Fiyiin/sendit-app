'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('./withDB/routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());

app.use(_express2.default.static(_path2.default.join(__dirname, 'UI')));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'UI', 'public', 'index.html'));
});

app.use('/api/v1/parcels', _index2.default);

app.listen(port, function () {
  return console.log('app running on ' + port);
});

exports.default = app;