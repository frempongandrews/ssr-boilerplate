import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";
import requireAuth from "../components/hocs/requireAuth";
import { fetchAdmins } from "../../actions/adminsActions";

class AdminsListPage extends Component {

    componentDidMount() {
        //avoid fetching admins second time on client if they've already been fetch
        //on the server (admins will already be fetched on the server on page reload on '/admins')
        const { isFinishedFetchingAdmins, areAdminsFetched } = this.props.admins;
        if ( !isFinishedFetchingAdmins && !areAdminsFetched ) {
            this.props.dispatch(fetchAdmins());
        }
        // this.props.dispatch(fetchAdmins());
    }

    renderAdmins = () => {
        // admins' reducer initial state
        const { admins } = this.props;
        return admins.admins.map(admin => {
            return (
                <li key={admin.id}>{admin.name}</li>
            )
        })
    };

    render() {

        // console.log(this.props);

        return (
            <div>
                <h3>Protected Admins Page List</h3>

                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log({state});
    return {
        state: state,
        auth: state.auth,
        admins: state.admins,

    }
};

export default {
    component: connect(mapStateToProps)( requireAuth(AdminsListPage)),
    loadData: (store) => {
        return store.dispatch(fetchAdmins());
    }
}