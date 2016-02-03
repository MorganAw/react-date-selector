var Calendar = ReactDateSelector.ReactDateSelector.Calendar;
var DatePicker = ReactDateSelector.ReactDateSelector.DatePicker;
var DateRangePicker = ReactDateSelector.ReactDateSelector.DateRangePicker;

console.log(ReactDateSelector);

console.log(ReactDateSelector['Calendar']);
console.log(DatePicker);
console.log(DateRangePicker);

ReactDOM.render(
  <div className="tests">
    <Calendar />
    <DatePicker />
    <DateRangePicker />
  </div>,
  document.getElementById('content')
);