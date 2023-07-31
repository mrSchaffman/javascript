import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
export default class TimersDashboard extends React.Component{
    render() {
        return (
            <div className='ui centered grid'>
                <div className='column'>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}