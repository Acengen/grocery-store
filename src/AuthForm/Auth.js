import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    isSign: true,
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.signInForm(
      this.state.email,
      this.state.password,
      this.state.isSign
    );
  };

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  switchAuthHandler = () => {
    this.setState((prevState) => {
      return {
        isSign: !prevState.isSign,
      };
    });
  };

  render() {
    let emailError = null;
    let emailExists = null;
    let passwordError = null;
    let passwordMissing = null;
    if (this.props.errorMessage === "INVALID_EMAIL") {
      emailError = <p className="text-center">{this.props.errorMessage}</p>;
    }
    if (this.props.errorMessage === "EMAIL_EXISTS") {
      emailExists = <p className="text-center">{this.props.errorMessage}</p>;
    }
    if (this.props.errorMessage === "INVALID_PASSWORD") {
      passwordError = <p className="text-center">{this.props.errorMessage}</p>;
    }
    if (this.props.errorMessage === "MISSING_PASSWORD") {
      passwordMissing = (
        <p className="text-center">{this.props.errorMessage}</p>
      );
    }

    let redirect = null;
    if (this.props.authorized) {
      redirect = <Redirect to="/" />;
    }
    return (
      <div className="login-form">
        {redirect}
        <h4 className="text-center">Login Form</h4>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.inputChangeHandler}
            type="email"
            id="email"
            placeholder="email"
          />
          {emailExists}
          {emailError}
          <input
            onChange={this.inputChangeHandler}
            type="password"
            id="password"
            placeholder="password"
          />
          {passwordError}
          {passwordMissing}
          <button>Submit</button>
        </form>
        <div className="text-center">
          <button onClick={() => this.switchAuthHandler()} className="sign-btn">
            {this.state.isSign ? "Switch to sign in" : "Switch to sign up"}
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
