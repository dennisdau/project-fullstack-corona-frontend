import React from "react";
import axios from 'axios'
import { withRouter } from "react-router-dom";
import OverviewStateComponent from "./overViewStateComponent/OverviewStateComponent"


export class OverviewComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            regulations:[]
        }
    }

    

    componentDidMount(){
        axios.get('http://localhost:8080/regulation')
        .then((data) =>{
                    this.setState({regulations:data.data}) 
                    console.log(this.state.regulations)
                    })
        .catch(error => {                    
        });     
    }

    renderStateOverViewComponents = (regulations) => {   
        return(
            <div>
                {regulations.map((regulation) => {
                    return <OverviewStateComponent regData={regulation}/>
                })}
    
            </div>
        ) 
    }


    render() {


        return(
            <div>
                <h3>this is the Overviewcomponent</h3>
                
                {this.renderStateOverViewComponents(this.state.regulations)}
                

            </div>
        )
    }
}



export default withRouter(OverviewComponent);