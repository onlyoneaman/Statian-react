import React from "react";

class Content extends React.Component{
    render() {
        return (
            <div style={{minHeight: '70vh'}}>
                <div className="is-mobile columns is-vcentered">
                    <div className="column is-6">
                        Column
                    </div>
                    <div className="column is-6">
                        Stats
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;