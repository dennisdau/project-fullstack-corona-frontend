import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavbarComponent.css";


export class NavbarComponent extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Navbar className="nav-wrapper" sticky="top" >
                    <div className="nav-title-wrapper">
                        <h3 className="title">CORONA-INFORMER</h3>
                    </div>
                      
                    <div className="nav-link-wrapper">
                        <Nav>      
                            <Link to="/" className="nav-link ">
                                OVERVIEW    
                            </Link>
                            <Link to="/regulation-check" className="nav-link">
                            REGULATION CHECK    
                            </Link>
                        </Nav>
                    </div>   
                </Navbar>
            </div>
        )
    }
}


export default withRouter(NavbarComponent)