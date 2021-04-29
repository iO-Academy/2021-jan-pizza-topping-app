import React from 'react';
import Pizzas from './App';

class ClickCounter extends React.Component{
constructor(props){
 super(props);
 this.state = {
            clickCounter: 0,
            peppers: '',
 }
}



render(){
    return(
    <Pizzas />

    )

}

}

export default ClickCounter;

