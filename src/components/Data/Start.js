import React from 'react';
import Connect from "../../Api/Connect";
import ReactGA from "react-ga";

const ConnectService = new Connect();

class Start extends React.Component{

    async startLoop (server, i, appUrl)  {
        await ConnectService.makingRequests(server, i, appUrl)
            .then((response)=>{
                console.log('Success',response.time);
                this.props.updateResponse(response.time, i+1);
            })
            .catch((response)=>{
                console.log('Failed',response);
            })
    }

    async processArray (array, server, appUrl) {
        for (const item of array) {
            await this.startLoop(server, item, appUrl);
        }
        this.callsFinish();
    }

    callsFinish = () => {
        console.log('done');
        this.props.processingEnd();
    }

    execute = () => {
        let server = null;
        let appUrl = null;
        let calls = parseInt(this.props.calls);
        let servers = this.props.servers;
        let apps = this.props.apps;
        this.props.processingStart();
        for(let i=0;i < servers.length; i++) {
            if(servers[i].id === this.props.serverId) {
                server = servers[i];
            }
        }
        for(let i=0;i < apps.length; i++) {
            if(apps[i].id === this.props.appId) {
                appUrl = apps[i].url;
            }
        }
        ReactGA.event({
            category: 'Started Processing',
            action: server.name + ' at ' + appUrl + ': ' + calls + ' calls'
        });
        let array = Array.from(Array(calls).keys())
        this.processArray(array, server, appUrl)
    }

    cancel = () => {
        this.props.processingEnd();
    }

    render() {
        return (
            <div>
                <button
                    disabled={this.props.processing}
                    className="button is-focused "
                    onClick={
                        this.execute
                    }
                >
                    Execute
                </button>
                {
                    (this.props.processing) ?
                        (
                            <button className="button is-danger is-outlined" style={{marginLeft: '12px'}} onClick={this.cancel}>
                                Cancel
                            </button>
                        ) : <div />
                }
            </div>
        );
    }
}

export default Start;