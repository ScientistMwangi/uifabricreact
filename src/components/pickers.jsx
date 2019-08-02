import React, { Component } from "react";

import {
  addDays,
  getDateRangeArray
} from "office-ui-fabric-react/lib/utilities/dateMath/DateMath";
import {
  Calendar,
  DayOfWeek,
  DateRangeType,
  DatePicker
} from "office-ui-fabric-react/lib/";
class PickersComps extends Component {
  state = {
    showCalendar: false,
    selectedDate: null
  };
  render() {
    const DayPickerStrings = {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      shortDays: ["S", "M", "T", "W", "T", "F", "S"],
      goToToday: "Go to today",
      weekNumberFormatString: "Week number {0}",
      prevMonthAriaLabel: "Previous month",
      nextMonthAriaLabel: "Next month",
      prevYearAriaLabel: "Previous year",
      nextYearAriaLabel: "Next year",
      prevYearRangeAriaLabel: "Previous year range",
      nextYearRangeAriaLabel: "Next year range",
      closeButtonAriaLabel: "Close"
    };

    return (
      <React.Fragment>
        <div>
          <h3>Calender</h3>
          <Calendar
            onSelectDate={this._onSelectDate}
            onDismiss={this._onDismiss}
            isMonthPickerVisible={this.props.isMonthPickerVisible}
            // value={this.state.selectedDate!}
            firstDayOfWeek={DayOfWeek.Sunday}
            strings={DayPickerStrings}
            isDayPickerVisible={this.props.isDayPickerVisible}
            highlightCurrentMonth={this.props.highlightCurrentMonth}
            highlightSelectedMonth={this.props.highlightSelectedMonth}
            showMonthPickerAsOverlay={this.props.showMonthPickerAsOverlay}
            showGoToToday={this.props.showGoToToday}
          />
        </div>
        <div>
          <h3>Date Picker</h3>
          <DatePicker
            firstDayOfWeek={"Monday"}
            strings={DayPickerStrings}
            showWeekNumbers={true}
            firstWeekOfYear={1}
            showMonthPickerAsOverlay={true}
            placeholder="Select a date..."
            ariaLabel="Select a date"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PickersComps;
