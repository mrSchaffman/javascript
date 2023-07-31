import React from "react";
import EditableTimerList from "../../entity/EditableTimerList";
import ToggleableTimerForm from "../../entity/ToggleableTimerForm";
import ClientProxy from "../proxy/ClientProxy";
export default class TimersDashboard extends React.Component{
    state = {
        timers:[],
    }
    componentDidMount() {
        const clientProxy = new ClientProxy();
        clientProxy.getTimers((result)=>{this.setState({timers:result})});
    }

    render() {

        return (
            <div className='ui centered grid'>
                <div className='column'>
                    <EditableTimerList timers={this.state.timers}/>
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}