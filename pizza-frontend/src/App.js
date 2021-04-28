import React from 'react';
import getAllPizzas from './service/service.js';
import './App.css';
import { render } from "react-dom"


// import pizzaObject from './service/service.js'
// let getAllPizzaVariables = getAllPizzas()
//
// getAllPizzas().then((pizzaObject) => {});

class PizzasApi extends React.Component{
    constructor(props){
    super(props);
    this.state = { apiResponse: ""};
   }

 callApi() {
        fetch('http://localhost:3000/')
            .then(res  => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callApi();
    }

    render(){
       return(
           <div>
                <p>Pizza Random Array: {this.state.apiResponse}</p>
           </div>
       )
    }
}

export default PizzasApi;





