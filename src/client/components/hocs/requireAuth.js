import React, { Component} from "react";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
    class RequireAuth extends Component {
        render() {
            console.log("**************RequireAuth props", this.props);
            // switch (this.props.auth.currentUser) {
            //     case null:
            //         return (
            //             <div>Loading....</div>
            //         );
            //
            //     case false:
            //        return <Redirect to={`/`}/>;
            //
            //     default:
            //         return <ChildComponent {...this.props}/>;
            // }

            if(!this.props.auth.currentUser) {
                return <Redirect to={`/`}/>;
            } else {
                return <ChildComponent {...this.props}/>;
            }
        }
    }

    return RequireAuth;
}