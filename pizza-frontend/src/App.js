import React from 'react';
import './App.css';
const shuffle = require('shuffle-array')


class PizzasApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            results: [],
            pizzaObjectArray: []
        };
        this.callApi()
    }

    callApi() {
        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    apiResponse: res
                })
                console.log(this.state.apiResponse)
                this.populateResults()
            })
            .catch(err => err);
    }

    setShuffleArray = () => {
        this.setState({
                shuffleArray: shuffle(this.state.pizzaObjectArray),
            }
        )
    }

    populateResults = () => {
        this.setState({
            pizzaObjectArray: this.state.apiResponse.arrayOfPizzas
        })
        this.setShuffleArray()
    }

    clickCounterFunction = (pizza)=> {
         this.setState({
         [pizza.toppingsname]: this.state[pizza.toppingsname]+1 || 1
         })
//put[pizza.toppingsname]
    }

    render(){
        console.log(this.state.pizzaObjectArray[0])
         if("shuffleArray" in this.state)
        {
        return(
            <div>
                {this.state.shuffleArray.slice(0,2).map(pizza => {
                    return(
                    <div onClick= {()=> {this.clickCounterFunction(pizza)}}>
                    <p> {pizza.toppingsname} </p>
                    <p><img src={pizza.toppingsimg} /> </p>
                    <p>This Item has {this.state.[pizza.toppingsname]} votes </p>
                    </div>

                    )
                })}

            </div>
        )}

         else { return <div> </div> }
    }
}



export default PizzasApi;





