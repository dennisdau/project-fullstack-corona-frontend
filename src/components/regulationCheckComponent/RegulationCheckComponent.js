import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import ConditionalInput from './ConditionalInput';
import RegulationCheck from '../..//util/RegulationCheck';
import "./RegulationCheckComponent.css";


export class RegulationComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            stateInput: 'Niedersachsen',
            personAmountInput: 0,
            householdsInput: 1,
            inClosedRoomsInput: true,
            locationSizeInput: 1,
            wearMaskInput: true,
            regulation:{}
        }

    }

   

    handleClickCheckRegulation =() =>{

        console.log(RegulationCheck.checkIfRegulationAreComplied(this.state))
      
    }
    
    handleGetDataClick = () => {
        axios.get('http://localhost:8080/regulation')
        .then((data) =>{
                    //console.log(data.data)
                    let regulation = data.data.filter((regulation) => regulation.state ==(this.state.stateInput))[0]
                    this.setState({regulation:regulation}) 
                    console.log(this.state.regulation)
                    })
        .catch(error => {                    
        });     
        console.log(this.state.regulation)
    }

    updateStateInput = (event) => {
        this.setState({
            stateInput: event.target.value
        })
    }

    updatePersonAmountInput = (event) => {
        this.setState({
            personAmountInput: event.target.value
        })
    }

    updateHouseholdsInput = (event) => {
        this.setState({
            householdsInput: event.target.value
        })
    }

    updateInClosedRoomsInput = (event) => {
        this.setState({
            inClosedRoomsInput: event.target.value
        })
    }

    updateLocationSizeInput = (event) => {
        this.setState({
            locationSizeInput: event.target.value
        })
    }

    updateWearMaskInput = (event) => {
        this.setState({
            wearMaskInput: event.target.value
        })
    }

    render() {

        return(
            <div>
                 <div className="regulation-check-component-wrapper">       
                            <ConditionalInput                               
                                inputValue={this.state.stateInput}
                                labelText='Bundesland'
                                type='text'
                                returnValue={this.updateStateInput}
                            />
                             <ConditionalInput                               
                                inputValue={this.state.personAmountInput}
                                labelText='Anzahl Personen'
                                type='number'
                                returnValue={this.updatePersonAmountInput}
                            />
                               <ConditionalInput                               
                                inputValue={this.state.householdsInput}
                                labelText='Anzahl an Haushalten'
                                type='number'
                                returnValue={this.updateHouseholdsInput}
                            />
                            <ConditionalInput                               
                                inputValue={this.state.inClosedRoomsInput}
                                labelText='in geschlossenen Räumen? [J/N]'
                                type='text'
                                returnValue={this.updateInClosedRoomsInput}
                            />
                            <ConditionalInput                               
                                inputValue={this.state.locationSizeInput}
                                labelText='Veranstaltungsfläche [m2]'
                                type='number'
                                returnValue={this.updateLocationSizeInput}
                            />
                            <ConditionalInput                               
                                inputValue={this.state.wearMaskInput}
                                labelText='Tragen die Teilnehmer eine Maske? [J/N]'
                                type='text'
                                returnValue={this.updateWearMaskInput}
                            />

                          
                                 
            
                    
                    <div className="checkEvent-wrapper">
                        <button 
                            className="button-checkEvent btn " 
                            onClick={this.handleGetDataClick} 
                            > 
                        Get Server Data
                        </button>          

                        <button 
                            className="button-checkEvent btn " 
                            onClick={this.handleClickCheckRegulation} 
                            > 
                        Check Veranstaltung
                        </button>         
                    </div>
                </div>
            </div>
        )
    }
}


  
export default withRouter(RegulationComponent);