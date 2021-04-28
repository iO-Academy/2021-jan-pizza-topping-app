import React from 'react';
import './App.css';
import {stringify} from "querystring";


class PizzasApi extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        apiResponse: "",

     };
   }

 callApi() {
        fetch('http://localhost:3000/')
            .then(res  => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callApi();
    }


    render() {
       return(

           <div>
                <p>Pizza Random Array:  {JSON.stringify(this.state.apiResponse)} </p>
           </div>
       )
   }
}

export default PizzasApi;





