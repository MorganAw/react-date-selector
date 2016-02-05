import React from 'react';
import ReactDOM from 'react-dom';
import ReactDateSelector from '../../index.js';

var Calendar = ReactDateSelector.Calendar;
var DatePicker = ReactDateSelector.DatePicker;
var DateRangePicker = ReactDateSelector.DateRangePicker;

console.log(ReactDateSelector);

// console.log(Calendar);
// console.log(DatePicker);
// console.log(DateRangePicker);

ReactDOM.render(
  <div className="tests">
    <Calendar />
    <DatePicker />
    <DateRangePicker />
  </div>,
  document.getElementById('content')
);