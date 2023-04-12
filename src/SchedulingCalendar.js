/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import NavigationBar from './NavigationBar';

// import { appointments } from '../../../demo-data/appointments';
const appointments = [
    {
        title: 'Sam and Derek Golf',
        startDate: new Date(2023, 2, 25, 9, 35),
        endDate: new Date(2023, 2, 25, 11, 30),
        id: 0,
        location: 'The County Course',
    }
]
export default class Demo extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
            currentDate: '2023-02-22',
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const { currentDate, data } = this.state;

        return (
            <Paper className="p-5">
                <NavigationBar/>
                <Scheduler
                    data={data}
                    //height={660}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                    <IntegratedEditing />
                    <MonthView

                    />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    />
                    <AppointmentForm />
                </Scheduler>
            </Paper>
        );
    }
}
