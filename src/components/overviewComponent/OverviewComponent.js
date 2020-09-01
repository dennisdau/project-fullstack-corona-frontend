import React from "react";
import { withRouter } from "react-router-dom";
import OverviewStateComponent from "./overViewStateComponent/OverviewStateComponent"


export class OverviewComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }
    }


    render() {
        return(
            <div>
                <h3>this is the Overviewcomponent</h3>
                <OverviewStateComponent />
            </div>
        )
    }
}



export default withRouter(OverviewComponent);