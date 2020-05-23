import React from "react";
import Options from "./Options";
import getServers from "../Api/Servers";
import Task from "./Stats/Task";

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            serverId: null,
            calls: 1,
            servers: [],
            apps: [],
            appId: null
        }
    }

    async componentDidMount() {
        let data = await getServers();
        this.setState({
            serverId: data.data.servers.defaultSelectedId,
            servers: data.data.servers.data,
            apps: data.data.apps.data,
            appId: data.data.apps.defaultSelectedId
        })
    }

    handleChangeCalls = calls => {
        this.setState({calls});
    }

    handleChangeServerId = serverId => {
        this.setState({serverId});
    }

    handleChangeAppId = appId => {
        this.setState({appId});
    }

    render() {
        return (
            <div
                className="section"
                style={{
                    minHeight: '70vh'
                }}
            >
                <div className="columns is-vcentered">
                    <div className="column is-6">
                        <Options
                            serverId = {this.state.serverId}
                            calls = {this.state.calls}
                            servers={this.state.servers}
                            apps={this.state.apps}
                            handleChangeAppId={this.handleChangeAppId}
                            handleChangeCalls={this.handleChangeCalls}
                            handleChangeServerId={this.handleChangeServerId}
                        />
                    </div>
                    <div className="column is-6">
                        <Task
                            servers={this.state.servers}
                            calls={this.state.calls}
                            serverId={this.state.serverId}
                            apps={this.state.apps}
                            appId={this.state.appId}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;