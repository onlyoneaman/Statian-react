import React from "react";

class Header extends React.Component{
    render() {
        return (
            <header
                style={{
                    backgroundColor: '#663399'
                }}
            >
                <nav
                    className=" container navbar"
                    style={{
                        backgroundColor: '#663399',
                        color: 'white'
                    }}
                >
                    <div className=" is-size-3-desktop is-size-2-widescreen is-size-4-tablet">
                        Statian
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;