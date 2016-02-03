'use strict';

var Calendar = ReactDateSelector.ReactDateSelector.Calendar;
var DatePicker = ReactDateSelector.ReactDateSelector.DatePicker;
var DateRangePicker = ReactDateSelector.ReactDateSelector.DateRangePicker;

console.log(ReactDateSelector);

console.log(ReactDateSelector['Calendar']);
console.log(DatePicker);
console.log(DateRangePicker);

ReactDOM.render(React.createElement(
  'div',
  { className: 'tests' },
  React.createElement(Calendar, null),
  React.createElement(DatePicker, null),
  React.createElement(DateRangePicker, null)
), document.getElementById('content'));
