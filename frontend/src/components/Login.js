import React, { Component } from 'react';
// import LoginInput from './LoginInput'
import '../style/Login.css';
import { Route } from 'react-router-dom'
import axios from 'axios'
import '../style/LoginInput.css';
import {FaUserAlt,FaLock} from 'react-icons/fa';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : this.props.type,
            email: "",
            password: ""
        }
    }

    onLogin(history){
        this.state.url === "rhome"?
            axios.get('http://127.0.0.1:8000/api/restaurants/', 
              { 
                params:{
                    email: this.state.email,
                    password: this.state.password
                }
              })
            .then(function (response) {
                console.log(response)
                if(response.data.message === "SUCCESS"){
                    history.push({pathname: '/rhome', state: { detail: response.data.result}})
                }
            })
        :
            axios.get('http://127.0.0.1:8000/api/non-profits/', 
            {
                params:{
                    email: this.state.email,
                    password: this.state.password
                }
            })
            .then(function (response) {
                if(response.data.message === "SUCCESS"){
                    history.push({pathname: '/nphome', state: { detail: response.data.result}})
                }
            })
        
    }
    
    handleEmailChange = (e) =>{
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <Route render={({ history}) => (
            <div className="login-comp">
                <img alt="Save Me A Piece" src={require('../logo.png')}/>
                <div className="login-title">WELCOME BACK!</div>
                <div className="login-title">PLEASE LOGIN:</div>
                <br/>
                <div className="login-input">
                    <span className="icon">
                        <FaUserAlt/>
                    </span>
                    <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder="EMAIL">
                    </input >
                </div>
                <div className="login-input">
                    <span className="icon">
                        <FaLock/>
                    </span>
                    <input onChange={this.handlePasswordChange} className="login-text"type="text" placeholder="EMAIL">
                    </input >
                </div>
                <button className="login-button" onClick={() => this.onLogin(history)} > 
                    <span className="button-login-name">LOGIN</span>
                </button>
            </div>
            )}
            />
        );
    }
}

export default Login;
