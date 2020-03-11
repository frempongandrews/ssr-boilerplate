import React, {Component} from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import {fetchCurrentUser} from "../../actions/authActions";
// const App = ({route}) => {
//     return (
//         <div>
//             {renderRoutes(route.routes)}
//         </div>
//     )
// };

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentUser())
    }

    render() {
        const { route } = this.props;
        return (
            <div>
                <h1>Header</h1>
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
    // loadData: () => {
    //     //todo: get current user here
    // }
}