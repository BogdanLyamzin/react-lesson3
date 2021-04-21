import React, {Component} from "react";

import "./ReverseButton.css";

class ReverseButton extends Component {
    state = {
        status: false,
        text: "basic text"
    }

    handleClick = () => {

        this.setState(({status}) => {
            return {
                status: !status
            }
        })
    }

    render(){
        const {status} = this.state;
        const {firstText, secondText} = this.props;
        
        const text = !status ? firstText : secondText;

        return <button onClick={this.handleClick}>{text}</button>
    }
}

export default ReverseButton;