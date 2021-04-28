import React from 'react';
import './App.css';
import PizzaApi from "./service/service";

class Clicks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: PizzaApi,
            clickCounter: -1,
            results: []
        }
    }

    populateResults = () => {

    }
}






