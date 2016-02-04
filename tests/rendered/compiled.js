"use strict";

var Calendar = ReactDateSelector.Calendar;
var DatePicker = ReactDateSelector.DatePicker;
var DateRangePicker = ReactDateSelector.DateRangePicker;

ReactDOM.render(React.createElement(
  "div",
  { className: "tests" },
  React.createElement(Calendar, null),
  React.createElement(DatePicker, null),
  React.createElement(DateRangePicker, null)
), document.getElementById('content'));
