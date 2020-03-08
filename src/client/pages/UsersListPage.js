import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";

class UsersListPage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());

    }

    renderUsers = () => {
        const { users } = this.props;
        return users.map(user => {
            return (
                <li key={user.id}>{user.name}</li>
            )
        })
    };

    render() {

        // console.log(this.props);

        return (
            <div>
                <h3>Users List</h3>

                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log({state});
    return {
        users: state.users.users,

    }
};

export default {
    component: connect(mapStateToProps)(UsersListPage),
    loadData: (store) => {
        //console.log("Trying to load some data....")
        return store.dispatch(fetchUsers())
    }
}