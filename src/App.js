import React from 'react';
import './App.css';
import RegulationCheckComponent from "./components/regulationCheckComponent/RegulationCheckComponent";
import OverviewComponent from "./components/overviewComponent/OverviewComponent";
import NavbarComponent from "./components/navbarComponent/NavbarComponent";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
            <div>
              <NavbarComponent />
              <Switch>
                  <Route path="/overview" component={OverviewComponent} />
                  <Route path="/regulation-check" component={RegulationCheckComponent} />
                  <Route path="/" component={OverviewComponent} /> 
              </Switch>
            </div>
          </div>
    </Router>
  );
}

export default App;
