import React from 'react';
import './App.css';
const shuffle = require('shuffle-array')


class PizzasApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            results: [],
            pizzaObjectArray: [],
            clickCounter: 0
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
         [pizza.toppingsname]: this.state[pizza.toppingsname]+1 || 1,
         clickCounter: this.state.clickCounter+1 || 1
         })
//put[pizza.toppingsname]
//        method: 'PUT'[this.state[pizza.toppingsname]]
        this.updateVotes()
    }

//     updateVotes = ()=>{
//     this.setState({
//
//     })
//      scoreBoard: this.state.scoreBoard + [[pizza.toppingsname] => [this.state.pizza.toppingsname]]
//        }

    render(){
   //if(this.state.clickCounter < noOfCombos){ } else{<FinalPage />}

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



//1. Send put request to the back end to update votes on db
//2. find out how to show votes from db on page
//3. complete if statement so that once you run out of images you get re-directed to the endpage
//4. display items in order from most to least votes
//5. styling

