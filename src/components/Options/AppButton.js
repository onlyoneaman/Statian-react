import React from "react";
import ReactGA from "react-ga";

class AppButton extends React.Component{

    updateAppId = e => {
        let apps = this.props.apps;
        for(let i=0; i < apps.length; i++) {
            if(apps[i].name === e) {
                this.props.handleChangeAppId(apps[i].id);
                ReactGA.event({
                    category: 'Changed App',
                    action: 'Selected '+apps[i].name
                });
                break;
            }
        }
    }

    render() {
        if(this.props.apps===undefined) {
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
            this.props.apps.map(c => {
                menuItems.push(
                    <option key={c.id} selected={c.id===this.props.appId}>
                        {c.name}
                    </option>
                )
            })
            let menu = (
                <select onChange={e => this.updateAppId(e.target.value)}>
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

export default AppButton;