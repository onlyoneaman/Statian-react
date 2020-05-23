import React from 'react';
import Connect from "../../Api/Connect";

const ConnectService = new Connect();

async function startLoop (server, i)  {
    await ConnectService.makingRequests(server, i)
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

    async processArray (array,server) {
        for (const item of array) {
            await startLoop(server, item);
        }
        this.callsFinish();
    }

    callsFinish = () => {
        console.log('done');
        this.setState({processing: false})
    }

    execute = () => {
        let server = null;
        let calls = parseInt(this.props.calls);
        let servers = this.props.servers;
        this.setState({processing: true})
        for(let i=0;i < servers.length; i++) {
            if(servers[i].id === this.props.serverId) {
                server = servers[i];
            }
        }
        let array = Array.from(Array(calls).keys())
        this.processArray(array, server)
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