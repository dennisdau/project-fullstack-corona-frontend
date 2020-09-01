import React from "react";
import './OverviewStateComponent.css';







export class OverviewStateComponent extends React.Component {

    constructor(props) {
        super(props);

        let propData = this.props.regData;
        
        this.state = {
            stateName: propData.state,
            maxPersonsClosedRooms: propData.maxPersonsClosedRooms,
            maxPersonsOutside: propData.maxPersonsOutside,
            maxHouseholdsClosedrooms: propData.maxHouseholdsClosedrooms,
            maxHouseholdsOutside: propData.maxHouseholdsOutside,
            maskDuty: propData.maskDuty,
            closedBuildingtypes: propData.closedBuildingtypes,
            maxPersonsPerSquareMeterClosedRooms: propData.maxPersonsPerSquareMeterClosedRooms,
            maxPersonsPerSquareMeterOutside: propData.maxPersonsPerSquareMeterOutside,
            otherRegulations: propData.otherRegulations
        }

    }

    render() {

        return(
            <div className="state-info-wrapper">
                 <div className="row">
                    <div className="row-item">
                        <h2>{this.state.stateName} </h2> 
                    </div> 
                    <div className="row-item">
                            <h5>Zusammenkünfte(maximal Anzahl)</h5>
                            <hr/>
                        <div className="row-item-meetings">
                            <div className="row-item-inner">
                                <div>
                                    <h6>Personen in gechlossenen Räumen</h6>
                                    <p>{this.state.maxPersonsClosedRooms}</p>
                                </div>
                                <div>
                                    <h6> Personen außerhalb geschlossener Räume</h6>
                                    <p>{this.state.maxPersonsOutside}</p>
                                </div>
                            </div>
                            <div className="row-item-inner">
                                <div>
                                    <h6>Haushalte in gechlossenen Räumen</h6>
                                    <p>{this.state.maxHouseholdsClosedrooms}</p>
                                </div>
                                <div>
                                    <h6>haushalte außerhalb geschlossener Räume</h6>
                                    <p>{this.state.maxHouseholdsOutside}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-item">
                        <h5>Veranstaltungen</h5>
                        <hr/>
                        <div>
                            <h6>Maximale Teilnehmerzahl in gechlossenen Räumen (pro m²)</h6>
                            <p>{this.state.maxPersonsPerSquareMeterClosedRooms}</p>
                        </div>
                        <div>
                            <h6>Maximale Teilnehmerzahl außerhalb geschlossener Räume (pro m²)</h6>
                            <p>{this.state.maxPersonsPerSquareMeterOutside}</p>
                        </div>
                    </div>
                 </div>

                 <div className="row">
                    <div className="row-item">
                        <h5>Schließungen</h5>
                        <hr/>
                        <div>
                            <h6>Geschlossene Gebäude</h6>
                            <p>{this.state.closedBuildingtypes}</p>
                        </div>
                    </div>
                    <div className="row-item">
                        <h5>Meskenpflicht in öffentlichen Gebäuden</h5>
                        <hr/>
                        <div>
                            <p>{this.state.maskDuty? "Ja" : "Nein"}</p>
                        </div>
                    </div>
                    <div className="row-item">
                        <h5>Sonstige</h5>
                        <hr/>
                        <div>
                            <p>{this.state.otherRegulations}</p>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}


  
export default OverviewStateComponent;