import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios'


class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    email: "",
    password: "",
    phoneNumber: 0,
    address: "",
    output: []
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.handleOut();
  };

  handleOut = e => {
    const listItems = this.state.output.map( (arr) => <li><p>{arr[0]},{arr[1]}</p></li> );  
    return <ul>{listItems}</ul>  
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, address, phoneNumber} = this.state;
    const restaurant = {name, email, password, address, phoneNumber};
    const conf = {
      method: "post",
      body: JSON.stringify(restaurant),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  }

  handleGet = e => {    
    console.log("getting");
    let url = "http://localhost:8000/api/get";
    axios.get(url).then((response) => {
          let restaurants = response.data;
          this.state.output = restaurants;
      }).catch((error) => {
          console.log(error);
      });
  };

  handleLogin = e => {    
    let em = this.state.email;
    let pass = this.state.password;
    let url = `http://localhost:8000/api/login/?email=${em}&password=${pass}`;
    axios.get(url).then((response) => {
          let restaurants = response.data;
          console.log(restaurants);
      }).catch((error) => {
          console.log(error);
      });
  };
  
  handleReg = e => {    
    let em = this.state.email;
    let pass = this.state.password;
    let nam = this.state.name;
    let phone = this.state.phoneNumber;
    let address = this.state.address;
    let url = `http://localhost:8000/api/register/?email=${em}&password=${pass}&address=${address}&name=${nam}&phone=${phone}`;
    axios.get(url).then((response) => {
          let restaurants = response.data;
          console.log(restaurants);
      }).catch((error) => {
          console.log(error);
      });
  };

  handleForgotPass = e => {    
    let em = this.state.email;
    let pass = this.state.password;
    let url = `http://localhost:8000/api/forgotpass/?email=${em}&newpass=${pass}`;
    axios.get(url).then((response) => {
          let restaurants = response.data;
          console.log(restaurants);
      }).catch((error) => {
          console.log(error);
      });
  };

  handleUnsub = e => {    
    let em = this.state.email;
    let url = `http://localhost:8000/api/unsub/?email=${em}`;
    axios.get(url).then((response) => {
          let restaurants = response.data;
          console.log(restaurants);
      }).catch((error) => {
          console.log(error);
      });
  };

  render() {
    const { name, email, password, address, phoneNumber, output} = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="password"
                onChange={this.handleChange}
                value={password}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">address</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="address"
                onChange={this.handleChange}
                value={address}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="phoneNumber"
                onChange={this.handleChange}
                value={phoneNumber}
                required
              />
            </div>
          </div>

          <div className="control">
            <button id = "submit_button" type="submit" className="button is-info">
              Submit
            </button>
          </div>
          <h4>Response:</h4>
          <this.handleOut> </this.handleOut>
        </form>
        <button onClick={this.handleGet}>
              get
        </button>
        <button onClick={this.handleLogin}>
              test login
        </button>
        <button onClick={this.handleReg}>
              test register
        </button>
        <button onClick={this.handleUnsub}>
              test unsubscribe
        </button>
        <button onClick={this.handleForgotPass}>
              test update password
        </button>
      </div>
    );
  }
}
export default Form;