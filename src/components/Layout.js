import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import {Helmet} from "react-helmet";

class Layout extends React.Component{
    render() {
        return (
            <div className="has-text-centered">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Statian | Cloud Stats and Latency</title>
                </Helmet>
                <Header />
                <div>
                    <Content />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;