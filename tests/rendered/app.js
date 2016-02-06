import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDateSelector from '../../index.js';

var Calendar = ReactDateSelector.Calendar;
var DatePicker = ReactDateSelector.DatePicker;
var DateRangePicker = ReactDateSelector.DateRangePicker;

console.log(ReactDateSelector);

// console.log(Calendar);
// console.log(DatePicker);
// console.log(DateRangePicker);

function thing() {
  console.log('hello');
}

ReactDOM.render(
  <div className="tests">
    <Calendar
      callback={ thing } />
    <DatePicker />
    <DateRangePicker />
  </div>,
  document.getElementById('content')
);