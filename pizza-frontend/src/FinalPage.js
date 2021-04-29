import React from 'react';
import Pizzas from './App';

class FinalPage extends React.Component{
constructor(props){
 super(props);
 this.state = {
 }
}


showInOrder = ()=>{


    return this.state.[pizza.toppingsname]

}
//localStorage.getItem(this.state)

render(){
    return(
     if("shuffleArray" in this.state)
            {
            return(
                <div>
                    {this.state.shuffleArray.map(pizza => {
                        return(
                        <p>This is the final page</p>
                        <p> {localStorage.getItem(this.state.pizza.toppingsname)} </p>
                        <p>You gave this item: {this.state.[pizza.toppingsname]} votes</p>
                        <p> This item has: {pizza.votes} votes</p>
                        <p><img src={pizza.toppingsimg} /> </p>
                        </div>

                        )
                        this.setState({

                        })
                    })}

                </div>

    )

}

}
}

export default FinalPage;

