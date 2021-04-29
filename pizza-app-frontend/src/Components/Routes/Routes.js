import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Results from "../Results/Results";
import App from "../../App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <switch>
            <Route exact path='/results' component={Results} />
            <Route exact path='/' component={Card} />
                    </switch>
                    <Footer />
            </div>
                </Router>
        )
    }
}

export default Routes
