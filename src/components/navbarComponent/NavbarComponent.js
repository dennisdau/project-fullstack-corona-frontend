import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavbarComponent.css";


export class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Navbar className="nav-wrapper" sticky="top" collapseOnSelect expand="lg">
                    <Nav>
                        <Link to="/" className="nav-link ">
                            OVERVIEW    
                        </Link>
                        <Link to="/regulation-check" className="nav-link">
                           REGULATION CHECK
                           
                        </Link>
                        <Link to="/dashboard" className="nav-link ">
                            DASHBOARD                            
                         
                        </Link>
                    </Nav>
                
                </Navbar>
            </div>
        )
    }
}


export default withRouter(NavbarComponent)