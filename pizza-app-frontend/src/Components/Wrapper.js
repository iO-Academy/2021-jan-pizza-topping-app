import React from 'react';import './wrapper.css';

class Wrapper extends React.Component {
    render() {
        return (
            <main className="mainWrapper">
                {this.props.children}
            </main>
        )
    }
}
export default Wrapper