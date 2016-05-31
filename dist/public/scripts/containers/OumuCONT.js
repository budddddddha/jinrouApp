'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _app = require('../actions/app');

var _OumuCOMP = require('../components/OumuCOMP');

var _OumuCOMP2 = _interopRequireDefault(_OumuCOMP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    output: state.oumu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    OumuClick: function OumuClick(input) {
      dispatch((0, _app.kaesu)(input));
    }
  };
};

var OumuCont = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_OumuCOMP2.default);

exports.default = OumuCont;