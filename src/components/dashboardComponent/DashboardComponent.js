import React from "react";
import { withRouter } from "react-router-dom";



export class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }
    }


    render() {
        return(
            <div>
                <h3>this is the DashboardComponent</h3>
            </div>
        )
    }
}



export default withRouter(DashboardComponent);