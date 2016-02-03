import React from 'React';
import moment from 'moment';

export default class DateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="__react-daterangepicker__">
        Date Range Picker
      </div>
    );
  }
};

DateRangePicker.propTypes = {
}