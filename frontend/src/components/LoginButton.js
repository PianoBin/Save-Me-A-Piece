import React, { Component } from 'react';
import '../style/LoginButton.css';
import {FaUtensils, FaConciergeBell} from 'react-icons/fa';
class LoginButton extends Component {
    render() {
        return (
            <button style = {{backgroundColor:this.props.color}}onClick={this.props.onClick} className="button">
            {this.props.icon === "restaurant" && <FaUtensils/>}
            {this.props.icon === "soup" && <FaConciergeBell/>} 
            <span className="button-name">{this.props.name}</span>
            </button>
        );
    }
}

export default LoginButton;