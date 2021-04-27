import React from 'react';
import './card.css'
import Wrapper from "../Wrapper";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>

                <div className="card1">
                    <img src="/images/mushrooms.jpg"/>
                    <div className="textNameCard1">
                        <p>Name: blablabla</p>
                        <p>Category:</p>
                    </div>
                </div>

                <div className="card2">
                    <img src="/images/aubergine.jpg"/>
                    <div className="textNameCard2">
                        <p>Name: blablabla</p>
                        <p>Category:</p>
                    </div>
                </div>


            </Wrapper>

        )
    }
}

export default Card