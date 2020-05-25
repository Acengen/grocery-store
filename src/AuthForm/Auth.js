import React, { Component } from "react";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    isSign: false,
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

  signIn = () => {
    this.setState({
      isSign: true,
    });
  };

  signOut = () => {
    this.setState({
      isSign: false,
    });
  };

  renderButtonContentOnAuth() {
    if (this.state.isSign) {
      return (
        <button onClick={this.signOut} className="sign-btn">
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.signIn} className="sign-btn">
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

    return (
      <div className="login-form">
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
          <button>Forward</button>
        </form>
        <div className="text-center">{this.renderButtonContentOnAuth()}</div>
      </div>
    );
  }
}

export default Auth;
