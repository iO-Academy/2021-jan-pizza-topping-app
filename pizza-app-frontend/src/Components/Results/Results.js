import React from 'react';
import './results.css'
import Footer from "../Footer/Footer";



class Results extends React.Component {
    render() {
        return (
            <div className="majorCard">
                <div className="bigCard">
                    <h1 className="h1results">Pizza App</h1>
                    <h2 className="h2results">the top 10 toppings are:</h2>
                        <p className="list">1. Tomatoes</p>
                        <p className="list">2. Mozzarella</p>
                        <p className="list">3. Chorizo</p>
                        <p className="list">4. Mushrooms</p>
                        <p className="list">5. Tandoori Chicken</p>
                        <p className="list">6. Rocket</p>
                        <p className="list">7. Prosciutto</p>
                        <p className="list">8. Pulled pork</p>
                        <p className="list">9. Peppers</p>
                        <p className="list">10. Sweetcorn</p>

</div>
            </div>
        )
    }
}




export default Results

