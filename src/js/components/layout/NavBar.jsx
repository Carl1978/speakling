import React, { Component } from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";

class NavBar extends Component {
    // state = {
    //     name: "Carl"
    // };

    render() {
        //console.log("state : " + this.state.name);
        // console.log("NavBar : props : ", this.props);
        // setTimeout(() => {
        //     this.props.history.push("/help");
        // }, 2000);

        return (
            <div className="nav-bar">
                <ul>
                    <li>
                        <NavLink to="/" exact activeStyle={linkStyle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help" exact activeStyle={linkStyle}>
                            Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/john" exact activeStyle={linkStyle}>
                            User
                        </NavLink>
                    </li>
                </ul>
                <input
                    type="button"
                    value="log in"
                    onClick={this.props.handleLogIn}
                />
            </div>
        );
    }
}

const linkStyle = {
    color: "yellow"
};

export default withRouter(NavBar);
