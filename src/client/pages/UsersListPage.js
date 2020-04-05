import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";

class UsersListPage extends Component {

    componentDidMount() {
        //avoid fetching users second time on client if they've already been fetch
        //on the server (users will already be fetched on the server on page reload on '/users')
        const { isFinishedFetchingUsers, areUsersFetched } = this.props.users;
        if ( !isFinishedFetchingUsers && !areUsersFetched ) {
            this.props.dispatch(fetchUsers());
        }
    }

    renderUsers = () => {
        //users' reducer initial state
        const { users } = this.props;
        return users.users.map(user => {
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
        state: state,
        users: state.users,

    }
};

export default {
    component: connect(mapStateToProps)(UsersListPage),
    loadData: (store) => {
        //console.log("Trying to load some data....")
        return store.dispatch(fetchUsers())
    }
}