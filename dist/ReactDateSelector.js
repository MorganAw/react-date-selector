'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Calendar = require('./Calendar/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _DatePicker = require('./DatePicker/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _DateRangePicker = require('./DateRangePicker/DateRangePicker');

var _DateRangePicker2 = _interopRequireDefault(_DateRangePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactDateSelector = {
  Calendar: _Calendar2.default,
  DatePicker: _DatePicker2.default,
  DateRangePicker: _DateRangePicker2.default
};

exports.default = ReactDateSelector;
// export { Calendar, DatePicker, DateRangePicker };