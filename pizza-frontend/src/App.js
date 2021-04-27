import React from 'react';
import getAllPizzas from './service/service.js';
import logo from './logo.svg';
import './App.css';

class Pizzas extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        randomisedArray: getAllPizzas()
    }
   }


 getInfo = ()=> {
     return this.state.randomisedArray.arrayOfShuffledPizzas[0]
   }

    render(){
    return(
        <div>
                <p>Pizza Random Array: {this.getInfo}</p>
        </div>
    )
    }
}

export default Pizzas;
