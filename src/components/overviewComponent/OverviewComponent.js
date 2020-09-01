import React from "react";
import { withRouter } from "react-router-dom";



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
            </div>
        )
    }
}



export default withRouter(OverviewComponent);