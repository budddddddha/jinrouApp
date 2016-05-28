'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _app = require('../reducers/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ここでloggerやmiddlewareなどをかませる
function configureStore() {
    var store = (0, _redux.createStore)(_app2.default);
    return store;
}