import React from "react";
import EditableTimerList from "./entity/EditableTimerList";
import ToggleableTimerForm from "./entity/ToggleableTimerForm";
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