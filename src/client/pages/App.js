import React, {Component} from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import {fetchCurrentUser} from "../../actions/authActions";
import Header from "../components/Header";

class App extends Component {
    componentDidMount() {
        //avoid fetching current user second time on client if it has already been fetch
        //on the server (current user will already be fetched on the server on any page reload)
        if (!this.props.auth.isFinishedFetchingCurrentUser) {
            this.props.dispatch(fetchCurrentUser());
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //todo: check auth on route change
    }

    render() {
        const { route, state } = this.props;
        // console.log("*********************State from App => ", state);
        return (
            <div>
                <Header />
               {renderRoutes(route.routes)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        auth: state.auth
    }
};

export default {
    component: connect(mapStateToProps)(App),
    loadData: (store) => {
        return store.dispatch(fetchCurrentUser());
    }
}