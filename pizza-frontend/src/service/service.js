export default async function getAllPizzas() {

    try {
        const response = await fetch('http://localhost:3001/');
        return await response.json();
    } catch (error) {
        console.log('Failed to return response.json')
        return [];

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
    }

}
