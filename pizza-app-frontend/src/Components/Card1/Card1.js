import React from 'react';
import './card1.css'
import Wrapper from "./Wrapper";

class Card1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <div className="card1">
                     <p>blablah</p>
                </div>

             <div className="card2">
                    <p>whwhwhwhwhw whwhwhw</p>
             </div>
            </div>
            </Wrapper>

        )
    }
}

export default Card1