import React, {Component} from "react";

class CountButton extends Component {
    state = {
        number: 0
    }

    increaseCount = (state) => {
        const prevNumber = state.number;
        return {
            number: prevNumber + 1
        }
    }

    handleClick = ()=> {
        this.setState(this.increaseCount)
    }

    render(){
        const {number} = this.state;

        return <button onClick={this.handleClick}>Меня нажали {number} раз</button>
    }
}

export default CountButton;