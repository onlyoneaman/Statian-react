import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class Layout extends React.Component{
    render() {
        return (
            <div className="has-text-centered">
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