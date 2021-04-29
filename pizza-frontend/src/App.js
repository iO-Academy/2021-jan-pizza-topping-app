import React from 'react';
import './App.css';
const shuffle = require('shuffle-array')


class PizzasApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            clickCounter: -1,
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


    render(){
        console.log(this.state.pizzaObjectArray[0])
        // if("shuffleArray" in this.state)
        return(

            <div>
                {this.state.shuffleArray.map(pizza => {
                    return <p> {pizza.categoriesname} </p>
                })}
            </div>
        )
        // else { return <div> </div> }
    }
}


export default PizzasApi;





