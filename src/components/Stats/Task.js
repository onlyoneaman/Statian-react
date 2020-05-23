import React from "react";
import Start from "../Data/Start";

class Task extends React.Component{

    render() {
        return (
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
                            serverId={this.props.serverId}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;