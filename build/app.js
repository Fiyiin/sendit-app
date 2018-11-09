"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _sendit = _interopRequireDefault(require("../api_v1/controllers/sendit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.post('/api/v1/orders', _sendit["default"].create);
app.get('/api/v1/orders', _sendit["default"].getAll);
app.get('/api/v1/orders/:id', _sendit["default"].getOne);
app.get('/api/v1/orders/:username', _sendit["default"].getUser);
app.put('/api/v1/orders/:id', _sendit["default"].cancel);
app.listen(3000);
console.log('app running on port', 3000);
var _default = app;
exports["default"] = _default;