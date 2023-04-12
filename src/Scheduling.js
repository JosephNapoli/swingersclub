/*
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

// import { appointments } from '../../../demo-data/month-appointments';



// const currentDate = '2023-02-22';

export default function Scheduling({user}) {
    let appointments = [
        {
            title: 'Chen vs Feifer vs Pfister vs Napoli',
            startDate: new Date(2023, 2, 25, 8, 30),
            endDate: new Date(2023, 2, 25, 11, 30),
            id: 0,
            location: 'The County Course',
        }, {
            title: 'Book Flights to San Fran for Sales Trip',
            startDate: new Date(2018, 5, 25, 12, 11),
            endDate: new Date(2018, 5, 25, 13, 0),
            id: 1,
            location: 'Room 1',
        }];
    return (<Paper>
        <Scheduler
            data={appointments}
        >
            <ViewState
            />
            <MonthView/>
            <Appointments/>
        </Scheduler>
    </Paper>)
};
*/

import React from "react";
import { render } from "react-dom";
import SchedulingCalendar from "./SchedulingCalendar";
export default function scheduling({user}) {
    render(<SchedulingCalendar/>, document.getElementById("root"));
}