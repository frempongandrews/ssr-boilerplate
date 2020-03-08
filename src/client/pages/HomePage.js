import React from "react";
import "../components/css/Home.css";
import {fetchUsers} from "../../actions/usersActions";
import { Link } from "react-router-dom";

class HomePage extends React.Component {

    clicked () {
        alert("Hiii");
    };
    render () {
        return (
            <div id="home">
                <h1>Home</h1>
                <button onClick={this.clicked}>click me</button>
                <div><Link to={`/users`}>Users</Link></div>
            </div>
        )
    }
}

export default {
    component: HomePage
};