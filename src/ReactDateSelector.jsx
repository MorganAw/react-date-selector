import Calendar from './Calendar/Calendar';
import DatePicker from './DatePicker/DatePicker';
import DateRangePicker from './DateRangePicker/DateRangePicker';

import ReactDOM from 'react-dom';

console.log(Calendar);
console.log(DatePicker);
console.log(DateRangePicker);

var ReactDateSelector =  Object.assign({}, {
  Calendar: Calendar,
  DatePicker: DatePicker,
  DateRangePicker: DateRangePicker
});

export { ReactDateSelector };
