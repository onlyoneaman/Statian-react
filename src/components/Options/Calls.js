import React from "react";
import ReactGA from "react-ga";

class Calls extends React.Component{
    state = {
        calls: this.props.calls,
        text: ''
    }

    handleSubmit = () => {
        if(this.props.processing) {
            this.setState({text: 'Cannot change while running a process.'})
        }
        else {
            if(this.validateNum(this.state.calls)) {
                ReactGA.event({
                    category: 'Changed number of calls',
                    action: 'Selected '+ this.state.calls
                });
                this.props.handleChangeCalls(this.state.calls);
            }
        }
    }

    validateNum = calls => {
        return(/^\+?(0|[1-9]\d*)$/.test(calls));
    }

    handleChange = calls => {
        this.setState({calls});
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="field">
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Calls to make"
                                        onChange={e => this.handleChange(e.target.value)}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <button
                                        onClick={() => this.handleSubmit()}
                                        className="button is-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{color: 'red',fontSize: '0.8em'}}>
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calls;