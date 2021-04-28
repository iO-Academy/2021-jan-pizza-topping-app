import React from 'react';
import './App.css';
import {stringify} from "querystring";


class PizzasApi extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        apiResponse: [],
        clickCounter: -1,
        results: []
     };
   }

 callApi() {
        fetch('http://localhost:3000/')
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


populateResults = ()=>{
    let resultsArray = [];
     for (let i = 0; i < this.state.apiResponse.length - 1; i++) {
        for (let j = i + 1; j < this.state.apiResponse.length; j++) {
        let obj1= JSON.stringify(this.state.apiResponse[i]);
        let obj2 = JSON.stringify(this.state.apiResponse[j]);
            resultsArray.push(`${obj1}${obj2}`);
           }
     }
         this.setState({
            clickCounter: this.state.clickCounter+1,
            results: resultsArray
         })
     }

    render(){
    console.log(this.state.apiResponse)
        return(
            <div>
                <p>clickCounter: {this.state.clickCounter}</p>
               <p> results: {this.state.results}</p>
               <p>Two Randoms: {this.state.results[this.state.clickCounter]}</p>
               <p><button onClick={this.populateResults} >Click here to begin</button></p>
            </div>
        )
    }
}


export default PizzasApi;





