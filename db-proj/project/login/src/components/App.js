import React, { Component } from 'react';
import LoginInput from './LoginInput'
import '../style/Login.css';

class App extends Component {
    render() {
        return (
            <div className="login-comp">
                <img alt="Save Me A Piece" src={require('../logo.png')}/>
                <div className="login-title">WELCOME BACK!</div>
                <div className="login-title">PLEASE LOGIN:</div>
                <br/>
                <LoginInput icon="user" name="EMAIL"/>
                <LoginInput icon="password" name="PASSWORD" />
                <button>
                    <span className="button-name">LOGIN</span>
                </button>
            </div>
        );
    }
}
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;