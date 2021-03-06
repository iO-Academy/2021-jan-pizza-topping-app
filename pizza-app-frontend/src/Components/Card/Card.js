import React from 'react';
import './card.css';
import Wrapper from "../Wrapper";
import Header from "../Header/Header";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Wrapper>
                <div className="header">
                <Header />
                </div>
                <a className="links" tabindex="1" id="hover" href="#">
                     <div className="card1">
                          <img src="/images/mushrooms.jpeg"/>
                            <div className="textCard1">
                              <p className="name">Name: blablabla</p>
                             <p className="category">Category:</p>
                                  <span className="dot1">1</span>
                            </div>
                     </div>
                </a>

                <a className="links" tabindex="1" href="#">
                <div className="card2">
                    <img src="/images/aubergine.jpeg"/>
                    <div className="textCard2">
                        <p className="name">Name: blablabla</p>
                        <p className="category">Category:</p>
                    </div>
                    <span className="dot2">2</span>
                </div>
                </a>


            </Wrapper>

        )
    }
}

export default Card