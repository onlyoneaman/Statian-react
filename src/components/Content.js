import React from "react";
import Options from "./Options";
import getServers from "../Api/Servers";
import Task from "./Stats/Task";

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            serverId: 1,
            calls: 0,
            servers: []
        }
    }

    async componentDidMount() {
        let data = await getServers();
        this.setState({
            serverId: data.servers.defaultSelectedId,
            servers: data.servers.data
        })
    }

    handleChangeCalls = calls => {
        this.setState({calls});
    }

    handleChangeServerId = serverId => {
        this.setState({serverId});
    }

    render() {
        return (
            <div
                className="section"
                style={{
                    minHeight: '70vh'
                }}
            >
                <div className="is-mobile columns is-vcentered">
                    <div className="column is-6">
                        <Options
                            serverId = {this.state.serverId}
                            calls = {this.state.calls}
                            servers={this.state.servers}
                            handleChangeCalls={this.handleChangeCalls}
                            handleChangeServerId={this.handleChangeServerId}
                        />
                    </div>
                    <div className="column is-6">
                        <Task
                            servers={this.state.servers}
                            calls={this.state.calls}
                            serverId={this.state.serverId}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;