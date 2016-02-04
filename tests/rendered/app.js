var Calendar = ReactDateSelector.Calendar;
var DatePicker = ReactDateSelector.DatePicker;
var DateRangePicker = ReactDateSelector.DateRangePicker;

ReactDOM.render(
  <div className="tests">
    <Calendar />
    <DatePicker />
    <DateRangePicker />
  </div>,
  document.getElementById('content')
);