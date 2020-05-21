import React from 'react';

class Start extends React.Component{
    state={
        processing: false
    }

    execute = () => {
        this.setState({processing: true})

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