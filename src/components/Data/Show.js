import React from "react";

class Show extends React.Component{

    isProcessing = () => {
        let text = '';
        if(this.props.processing) {
            text = 'Process Running'
        }
        else {
            text = 'Start Process'
        }
        return(text);
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {this.isProcessing()}
                    {
                        this.props.prevResp ?
                            <div>
                                <p>
                                    Final Response time: {this.props.prevResp} ms
                                </p>
                                <p>
                                    Average Response time: {this.props.avgResp} ms
                                </p>
                                <p>
                                    Calls made till now: {this.props.callsTillNow}
                                </p>
                            </div>
                            :
                            <div />
                    }
                </div>
            </div>
        );
    }
}

export default Show