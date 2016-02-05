import React from 'react';
import moment from 'moment';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="__react-datepicker__">
        Date Picker
      </div>
    );
  }
};

DatePicker.propTypes = {
}