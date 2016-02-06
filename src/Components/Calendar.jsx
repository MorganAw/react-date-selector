import React from 'react';
import moment from 'moment';
import Header from './Header';

// Calendar Component (only export)
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    let now = moment();
    console.log('Creating Calendar with anchor date:', this.props.anchor);
    this.state = {
      anchor: this.props.anchor === undefined ? now : this.props.anchor,
      active: this.props.initial ? this.props.initial : now,
      callback: this.props.callback
    };
  }

  /* ---===== { Custom Methods } =====--- */

  /* ---===== { React Lifecycle Methods } =====--- */
  render() {
    // Set Calendar table
    var rows = 
      <div className="temp">
        Temp
      </div>;
    return(
      <div className="__rds-calendar-selector__">
        <Header />
        <div className="__rds-calendar-table__">
          <div className="__rds-calendar-row__ __rds-calendar-daylabels__">
            <p className="__rds-calendar-day__"><b>S</b></p>
            <p className="__rds-calendar-day__"><b>M</b></p>
            <p className="__rds-calendar-day__"><b>T</b></p>
            <p className="__rds-calendar-day__"><b>W</b></p>
            <p className="__rds-calendar-day__"><b>T</b></p>
            <p className="__rds-calendar-day__"><b>F</b></p>
            <p className="__rds-calendar-day__"><b>S</b></p>
          </div>
          { rows }
        </div>
      </div>
    );
  }
};

Calendar.propTypes = {
  anchor: React.PropTypes.object,
  initial: React.PropTypes.object,
  callback: React.PropTypes.func.isRequired,
  // Add optional header prop
}

/*
// Day Component
class DayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <p className="__rds-calendar-day__"><b>{ date }</b></p>
    );
  }
}
*/

// --------======= Copy/Pasted Below ==========-----------
// var now = moment();
// var months = [];
// // Correct year if necessary
// for(let counter = 0; counter < 4; counter++) {
//   if (now.month()+counter+9 < 12) {
//     months.push(moment([now.year()-1, now.month()+counter+9]));
//   } else {
//     months.push(moment([now.year(), (now.month()+counter+9)%12]));
//   }
// };

// function sameDay(d1, d2) {
//   return (
//     (d1.year() == d2.year()) &&
//     (d1.month() == d2.month()) &&
//     (d1.date() == d2.date()));
// };

// // The completed Calendar class
// export class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       header: true,
//       active_m: 3,
//       active_d: now
//     }
//   }
//   mClick(m_index) {
//     this.setState({
//       active_m: m_index
//     });
//   }
//   dClick(date) {
//     this.setState({
//       active_d: date
//     });
//     this.props.onChange(date.toDate());
//   }
//   render() {
//     // console.log('*** Rendering Calendar ***');
//     if(this.state.header) {
//       var header =
//         <Header
//           active_m={ this.state.active_m }
//           mClick={ this.mClick.bind(this) }/>
//     }
//     return (
//       <div className="Calendar">
//         { header }
//         <CalTable
//           active_d={ this.state.active_d }
//           active_m={ this.state.active_m }
//           dClick={ this.dClick.bind(this) }
//           hasTLapse={ this.hasTLapse.bind(this) }/>
//       </div>
//     );
//   }
// }

// // Component containing all the DayComponents
// class CalTable extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(this.props);
//   }

//   // Implement onClick event

//   render() {
//     // month_table[x] corresponds to months[x]
//     var month_table = [];
//     // For each month, make a table out of rows
//     for(let counter = 0; counter < months.length; counter++) {
//       let numdays = months[counter].daysInMonth();    // Number of days in a month
//       let rows = [];                                  // Array to hold completed rows
//       let row_content = [];                           // Array to hold DayComponents
//       // For each row, fill it with DayComponents
//       for(let daycount = 1; daycount <= numdays; daycount++) {
//         let this_date = moment([months[counter].year(), months[counter].month(), daycount]);
//         // First row, fill with blanks
//         if(daycount == 1) {
//           for(let fillcount = 0; fillcount < this_date.day(); fillcount++) {
//             row_content.push(
//               <DayComponent key={ 'fill'+fillcount }/>
//             );
//           }
//         }
//         // Push DayComponent with the current date
//         if(sameDay(this_date, this.props.active_d)) {
//           row_content.push(
//             <DayComponent
//               date={ this_date }
//               key={ 'm'+counter+'d'+daycount }
//               active_d={ true }
//               hasTLapse={ this.props.hasTLapse(this_date) }
//               dClick={ this.props.dClick }/>
//           );
//         } else {
//           row_content.push(
//             <DayComponent
//               date={ this_date }
//               key={ 'm'+counter+'d'+daycount }
//               active_d={ false }
//               hasTLapse={ this.props.hasTLapse(this_date) }
//               dClick={ this.props.dClick }/>
//           );
//         }

//         // At the end of the week, push a completed row
//         if(this_date.day() == 6 || daycount == numdays) {
//           // If it's the last day of the month, pad the end with fillers
//           if(daycount == numdays) {
//             for(let fillcount = 0; fillcount < 6-this_date.day(); fillcount++) {
//               row_content.push(
//                 <DayComponent key={ 'endfill'+fillcount }/>
//               );
//             }
//           }
//           rows.push(
//             <div className="tCal_drow" key={ 'week'+(daycount/7) }>
//               { row_content }
//             </div>
//           );
//           row_content = [];
//         }
//       }

//       // Push a completed month onto the array
//       month_table.push(
//         <div className={ 'tCal_month month'+counter } key={ 'month'+counter }>
//           { rows }
//         </div>
//       );
//     }

//     return (
//       <div className="tCal_table">
//         {/*
//         <ReactCSSTransitionReplace
//           transitionName="tCal_swap"
//           transitionEnterTimeout={1000}
//           transitionLeaveTimeout={400}>
//         }
//           { month_table[this.props.active_m] }
//         {/*
//         </ReactCSSTransitionReplace>
//         */}
//       </div>
//     );
//   }
// }

// // Each individual DayComponent
// class DayComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   // Implement onClick events

//   render() {
//     if(this.props.date) {
//       // If it's not a filler DayComponent
//       var classNames = '';
//       // If this date today
//       if(sameDay(now, this.props.date)){
//         classNames += ' tCal_today'
//       }
//       // If this date has a timelapse
//       if(this.props.hasTLapse) {
//         classNames += ' tCal_hasTLapse'
//       }
//       // If this date is active
//       if(this.props.active_d) {
//         classNames += ' tCal_active_d';
//       }
//       var daycomp =
//         <div
//           className={ 'tCal_tl_circle'+classNames }
//           onClick={ this.props.dClick.bind(null, this.props.date) }>
//           { this.props.date.format('D') }
//         </div>;
//     } else {
//       // If it's a filler component, add a nbsp to make css play nice
//       var daycomp =
//         <div className="tCal_filler">
//           { '\u00a0' }
//         </div>;
//     }
//     return (
//       <div className="tCal_day">
//         { daycomp }
//       </div>
//     );
//   }
// }

// // Header Component
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   // Implement onClick events

//   render() {
//     var m_heads = [];
//     for(let counter = 0; counter < months.length; counter++) {
//       // console.log('Header props: ', this.props);
//       if(counter == this.props.active_m) {
//         m_heads.push(
//           <div
//             key={ 'tCal_m'+counter }
//             className="tCal_head_m tCal_active_m"
//             id={ 'tCal_m'+counter }
//             onClick={ this.props.mClick.bind(null, counter) }><p>{ months[counter].format('MMMM') }</p></div>
//         );
//       } else {
//         m_heads.push(
//           <div
//             key={ 'tCal_m'+counter }
//             className="tCal_head_m"
//             id={ 'tCal_m'+counter }
//             onClick={ this.props.mClick.bind(null, counter) }><p>{ months[counter].format('MMMM') }</p></div>
//         );
//       }
//     }
//     return (
//       <div className="tCal_header">
//         <div className="tCal_months">
//           { m_heads }
//         </div>
//         <div className="tCal_dates">
//           <div className="tCal_head_d"><h7>S</h7></div>
//           <div className="tCal_head_d"><h7>M</h7></div>
//           <div className="tCal_head_d"><h7>T</h7></div>
//           <div className="tCal_head_d"><h7>W</h7></div>
//           <div className="tCal_head_d"><h7>T</h7></div>
//           <div className="tCal_head_d"><h7>F</h7></div>
//           <div className="tCal_head_d"><h7>S</h7></div>
//         </div>
//       </div>
//     );
//   };
// }