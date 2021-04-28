import React from 'react';

class PizzaApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        };
    }

    callApi() {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => err);
    }

    componentWillMount() {
        this.callApi();
    }
}

export default PizzaApi