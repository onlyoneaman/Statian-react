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
                    &nbsp;&nbsp;&nbsp;
                    {
                        this.props.prevResp ?
                            <div>
                                {
                                    !this.props.processing ?
                                        <p>
                                            <button title="Refresh" className="delete is-small" onClick={()=>this.props.clear()}/>
                                        </p>
                                    :
                                        <p />
                                }
                                <p>
                                    Final Response time: {this.props.prevResp} ms
                                </p>
                                <p>
                                    Average Response time: {this.props.avgResp} ms
                                </p>
                                {
                                    this.props.processing ?
                                        <p>
                                            Processing {this.props.callsTillNow} of {this.props.calls}
                                        </p>
                                        :
                                        <p>
                                            Calls made: {this.props.callsTillNow}
                                        </p>
                                }
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