import React from "react";
import CloudButton from "./Options/CloudButton";
import Calls from "./Options/Calls";
import AppButton from "./Options/AppButton";

class Options extends React.Component {
    render() {
        return(
            <div>
                <div className="section">
                    <CloudButton
                        servers={this.props.servers}
                        serverId={this.props.serverId}
                        handleChangeServerId={this.props.handleChangeServerId}
                    />
                </div>
                <div className="section">
                    <AppButton
                        apps={this.props.apps}
                        appId={this.props.appId}
                        handleChangeAppId={this.props.handleChangeAppId}
                    />
                </div>
                <div className="section">
                    <Calls
                        calls={this.props.calls}
                        handleChangeCalls={this.props.handleChangeCalls}
                        processing={this.props.processing}
                    />
                </div>
            </div>
        );
    }
}

export default Options;