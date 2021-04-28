import React from 'react';
import './App.css';
const shuffle = require('shuffle-array')

class PizzasApi extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        apiResponse: [],
        clickCounter: -1,
        results: [],
        pizzaObjectArray: []
     };
   }

 callApi() {
        fetch('http://localhost:3001/')
            .then(res  => res.json())
            .then(res => {this.setState({
            apiResponse: res
            })
            console.log(this.state.apiResponse)
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.callApi();
    }


    blah = () => {
        this.setState({
          shuffleArray: shuffle(this.state.pizzaObjectArray),
          }
        )
     }

    populateResults = () => {
        this.setState({
            pizzaObjectArray: this.state.apiResponse.arrayOfPizzas
        })
        this.blah()
    }



    render(){
        console.log(this.state.pizzaObjectArray[0])
        return(

            <div>
                <p>{JSON.stringify(this.state.pizzaObjectArray.categoriesid)}</p>
                <p>{JSON.stringify(this.state.pizzaObjectArray[1])}</p>
                <button onClick={ this.populateResults }> Click me </button>
            </div>
        )
    }
}


export default PizzasApi;





