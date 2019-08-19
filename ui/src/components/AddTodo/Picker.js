import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "material-ui-pickers";

function Picker(props){
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="pickers">
          <DateTimePicker value={props.selectedDate} onChange={(date)=>props.handleDateChange(date)} disablePast/>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
export default Picker;