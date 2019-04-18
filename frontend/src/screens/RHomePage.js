import React, { Component } from 'react';
import HomeButton from '../components/HomeButton'
import '../style/RHomePage.css';
import {Route} from 'react-router-dom'
class RHomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            restObj: this.props.location.state.detail[0],
            name: this.props.location.state.detail[0][1]
        }
    }
    render() {
        return (
            <Route render={({ history}) => (
                <div className="r-home-page">
                    <div className="r-navigation">
                        <div className = "r-nav-title">WELCOME {this.state.name}!</div>
                        <div onClick={() => history.push("/np-req")} className = "r-nav-title">NON PROFIT REQUESTS</div>
                        <div onClick={() => history.push("/menu")} className = "r-nav-title">MY MENU</div>
                        <div className = "r-nav-title">SETTINGS</div>
                    </div>
                    <div>
                        <img alt="Save Me A Piece" src={require('../logo.png')}/>
                        <div className="r-home-title">SAVE ME A PIECE</div>
                        <HomeButton type="r" url="/rest-search" name="NON PROFITS NEAR ME"/>
                    </div>
                </div>
            )}/>
        );
    }
}

export default RHomePage;
