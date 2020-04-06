import React, {Component} from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import {fetchCurrentUser} from "../../actions/authActions";
import Header from "../components/Header";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        const { route } = this.props;
        return (
            <div>
                <Header />
               {renderRoutes(route.routes)}
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
};

export default {
    component: connect(mapStateToProps)(App),
    loadData: (store) => {
        //todo: get current user here
    }
}