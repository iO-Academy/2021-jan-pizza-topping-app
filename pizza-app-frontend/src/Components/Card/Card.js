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
                    <div className="textCard1">
                        <p className="name">Name: blablabla</p>
                        <p className="category">Category:</p>
                        <span className="dot1">1</span>
                    </div>
                </div>

                <div className="card2">
                    <img src="/images/aubergine.jpg"/>
                    <div className="textCard2">
                        <p className="name">Name: blablabla</p>
                        <p className="category">Category:</p>
                    </div>
                    <span className="dot2">2</span>
                </div>


            </Wrapper>

        )
    }
}

export default Card