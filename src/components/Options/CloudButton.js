import React from "react";

class CloudButton extends React.Component{

    updateServerId = e => {
        let servers = this.props.servers;
        for(let i=0; i < servers.length; i++) {
            if(servers[i].name === e) {
                this.props.handleChangeServerId(servers[i].id);
                break;
            }
        }
    }

    render() {
        if(this.props.servers===undefined) {
            return (
                <div className="card">
                    <div className="card-content">
                        <div className="card-header-title">
                            <div className="has-text-centered">
                                Select Server
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            let menuItems = [];
            this.props.servers.map(c => {
                menuItems.push(<option key={c.id}>{c.name}</option>)
            })
            let menu = (
                <select onChange={e => this.updateServerId(e.target.value)}>
                    {menuItems}
                </select>
            );
            return (
                <div className="card">
                    <div className="card-content has-text-centered">
                        <div className="card-header-title">
                            <div className="has-text-centered">
                                Select Server
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <div
                                        className="select is-fullwidth"
                                    >
                                        {menu}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default CloudButton;