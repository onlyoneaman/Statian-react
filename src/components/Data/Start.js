import React from 'react';
import Connect from "../../Api/Connect";

class Start extends React.Component{
    state={
        processing: false
    }

    execute = () => {
        let server = null;
        let servers = this.props.servers;
        this.setState({processing: true})
        for(let i=0;i < servers.length; i++) {
            if(servers[i].id === this.props.serverId) {
                server = servers[i];
            }
        }
        console.log(server);
        let response = Connect(server);
    }

    cancel = () => {
        this.setState({processing: false})

    }

    render() {
        return (
            <div>
                <button disabled={this.state.processing} className="button is-focused " onClick={this.execute}>
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