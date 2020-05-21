import React from "react";
import Layout from "../components/Layout";
import ReactGA from 'react-ga'


class Home extends React.Component{
    componentDidMount() {
        ReactGA.initialize('UA-141356997-7', {
            debug: false,
            titleCase: false,
        });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return(
            <div>
                <Layout />
            </div>
        );
    }
}

export default Home