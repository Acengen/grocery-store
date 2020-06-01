import React, { Component } from "react";
import { ContextObject } from "../ContextAPI/ContextApi";

class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  static contextType = ContextObject;

  submitHandler = (e) => {
    e.preventDefault();
    this.context.signInForm(this.state.email, this.state.password);
  };

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  renderButtonContentOnAuth() {
    if (this.context.isSign) {
      return (
        <button onClick={this.context.signOut} className="sign-btn">
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.context.signIn} className="sign-btn">
          Sign in
        </button>
      );
    }
  }

  render() {
    let emailError = null;
    let emailExists = null;
    let passwordError = null;
    let passwordMissing = null;
    if (this.context.errorMsg === "INVALID_EMAIL") {
      emailError = <p className="text-center">{this.context.errorMsg}</p>;
    }
    if (this.context.errorMsg === "EMAIL_EXISTS") {
      emailExists = <p className="text-center">{this.context.errorMsg}</p>;
    }
    if (this.context.errorMsg === "INVALID_PASSWORD") {
      passwordError = <p className="text-center">{this.context.errorMsg}</p>;
    }
    if (this.context.errorMsg === "MISSING_PASSWORD") {
      passwordMissing = <p className="text-center">{this.context.errorMsg}</p>;
    }

    return (
      <div className="login-form" data-test="auth-component">
        <h4 className="text-center">Login Form</h4>
        <form onSubmit={this.submitHandler} data-test="form-inputs">
          <input
            onChange={this.inputChangeHandler}
            type="email"
            id="email"
            placeholder="email"
            data-test="inputs"
          />
          {emailExists}
          {emailError}
          <input
            onChange={this.inputChangeHandler}
            type="password"
            id="password"
            placeholder="password"
            data-test="inputs"
          />
          {passwordError}
          {passwordMissing}
          <button data-test="submit">Forward</button>
        </form>
        <div className="text-center">{this.renderButtonContentOnAuth()}</div>
      </div>
    );
  }
}

export default Auth;
