import React from "react";
import Start from "../Data/Start";
import Show from "../Data/Show";

class Task extends React.Component{
    state = {
        prevResp: null,
        avgResp: null,
        callsTillNow: 0,
    }

    processingStart = () => {
        this.props.handleProcessing(true);
    }

    processingEnd = () => {
        this.props.handleProcessing(false);
    }

    clear = () => {
        console.log('clear')
        this.setState({
            prevResp: null,
            avgResp: null,
            callsTillNow: null,
        })
    }

    updateResponse = (responseTime, callsTill) => {
        let avg = (this.state.callsTillNow*this.state.avgResp + responseTime)/callsTill;
        avg = avg.toFixed(3)
        if(callsTill===1) {
            avg = responseTime;
        }
        this.setState({
            prevResp: responseTime,
            callsTillNow: callsTill,
            avgResp: avg
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="section">
                    <div className="card">
                        <div className="card-content">
                            <div className="" style={{paddingBottom: '4%'}}>
                                {(this.props.servers.length) ? this.props.servers[this.props.serverId - 1].name : ''} | {this.props.calls}
                            </div>
                            <Start
                                servers={this.props.servers}
                                calls={this.props.calls}
                                apps={this.props.apps}
                                appId={this.props.appId}
                                processing={this.props.processing}
                                serverId={this.props.serverId}
                                updateResponse={this.updateResponse}
                                processingStart={this.processingStart}
                                processingEnd={this.processingEnd}
                            />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <Show
                        processing={this.props.processing}
                        prevResp={this.state.prevResp}
                        avgResp={this.state.avgResp}
                        callsTillNow={this.state.callsTillNow}
                        clear={this.clear}
                        calls={this.props.calls}
                    />
                </div>
            </div>
        );
    }
}

export default Task;