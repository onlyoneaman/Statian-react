import React from 'react';
import Connect from "../../Api/Connect";

const ConnectService = new Connect();

async function startLoop (server, i, appUrl)  {
    console.log(server, i, appUrl);
    await ConnectService.makingRequests(server, i, appUrl)
        .then((response)=>{
            console.log('Success',response);
        })
        .catch((response)=>{
            console.log('Failed',response);
        })
}

class Start extends React.Component{
    state={
        processing: false
    }

    async processArray (array, server, appUrl) {
        for (const item of array) {
            await startLoop(server, item, appUrl);
        }
        this.callsFinish();
    }

    callsFinish = () => {
        console.log('done');
        this.setState({processing: false})
    }

    execute = () => {
        let server = null;
        let appUrl = null;
        let calls = parseInt(this.props.calls);
        let servers = this.props.servers;
        let apps = this.props.apps;
        this.setState({processing: true})
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
        let array = Array.from(Array(calls).keys())
        this.processArray(array, server, appUrl)
    }

    cancel = () => {
        this.setState({processing: false})

    }

    render() {
        return (
            <div>
                <button
                    disabled={this.state.processing}
                    className="button is-focused "
                    onClick={
                        this.execute
                    }
                >
                    Execute
                </button>
                {
                    (this.state.processing) ?
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