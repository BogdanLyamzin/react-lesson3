import React, {Component} from "react";

import "./Counter.css";

class Counter extends Component {

    state = {
        counterValue: 0
    }

    // increaseCounter = ()=> {
    //     this.setState(({counterValue})=>{
    //         return {
    //             counterValue: counterValue + 1
    //         }
    //     })
    // }

    // decreaseCounter = ()=>{
    //     this.setState(({counterValue})=>{
    //         return {
    //             counterValue: counterValue - 1
    //         }
    //     })
    // }

    changeCounterValue = (value)=>{
        this.setState(({counterValue})=>{
            return {
                counterValue: counterValue + value
            }
        })
    }

    render(){
        const {counterValue} = this.state;
        // const {increaseCounter, decreaseCounter} = this;
        const {changeCounterValue} = this;
        return (
            <div className="counter">
                <span onClick={()=> changeCounterValue(-1)} className="counter-btn">-</span>
                <span className="counter-value">{counterValue}</span>
                <span onClick={()=> changeCounterValue(1)} className="counter-btn">+</span>
            </div>
        )
    }
}

export default Counter;