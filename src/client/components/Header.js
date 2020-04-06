import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component{
    render() {
        const { auth } = this.props;
        return (
            <header>
                <Link to={`/`}>Home</Link>
                {
                    auth.currentUser &&
                    <div><a href="/api/logout">logout</a></div>
                }

                {
                    !auth.currentUser &&
                    <div><a href="/api/auth/google">login</a></div>
                }

            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps) (Header);