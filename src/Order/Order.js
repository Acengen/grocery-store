import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Grocerys from "../Grocerys/Gorcerys";
import GroceryContext from "../Context/GroceryContext";
import OrderedProducts from "./OrderedProducts";
import Contacts from "../ContactsForm/Contacts";
import Auth from "../AuthForm/Auth";
import LinkToLogin from "../Navbar/LinkToLogin";
import CustomerOrder from "./CustomerOrder";
import Logout from "./Logout/Logout";
import LogoutMsg from "./Logout/LogoutMsg";

class Order extends Component {
  state = {
    porducts: [
      {
        name: "Carrot",
        picture:
          "https://ak.picdn.net/shutterstock/videos/18688502/thumb/1.jpg",
        price: 2.99,
        id: 1,
      },
      {
        name: "Tomatoe",
        picture:
          "https://thenypost.files.wordpress.com/2019/05/tomatoes-grocery-store.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        price: 4,
        id: 2,
      },
      {
        name: "Apple",
        picture:
          "https://www.rd.com/wp-content/uploads/2017/09/01_apples_The-Gross-Truth-About-the-Apples-Youre-Buying-at-the-Supermarket_224332468_Robin-Keefe.jpg",
        price: 1.2,
        id: 3,
      },
      {
        name: "Banana",
        picture:
          "https://wallpapercrafter.com/uploads/posts/109476-bananas_fruits_food_grocery-store_supermarket.jpg",
        price: 2,
        id: 4,
      },
    ],
    total: 0,
    selectedOrders: [],
    authorized: false,
    userId: null,
    idToken: null,
    alert: "",
    errorMessage: "",
    logoutMsg: "",
  };

  static contextType = GroceryContext;

  totalPrice = (price, product) => {
    let oldPrice = this.state.total;
    let newPrice = oldPrice + price;
    let select = [...this.state.selectedOrders, product];

    this.setState({
      total: newPrice,
      selectedOrders: select,
    });
  };

  remove = (price, index) => {
    let oldPrice = this.state.total;
    let newPrice = oldPrice - price;
    let selectedOrders = [...this.state.selectedOrders];
    selectedOrders.splice(index, 1);

    this.setState({
      total: newPrice,
      selectedOrders: selectedOrders,
    });
    if (newPrice < 0) {
      this.setState({
        total: 0,
      });
    }
  };

  signInForm = (email, password, isSign) => {
    const signData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFwsvaCT8sMufl5wko9QfCkdR3kVqu2nQ";

    if (!isSign) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFwsvaCT8sMufl5wko9QfCkdR3kVqu2nQ";
    }

    axios
      .post(url, signData)
      .then((response) =>
        this.setState({
          authorized: true,
          idToken: response.data.idToken,
          userId: response.data.localId,
        })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.response.data.error.message });
      });

    setTimeout(() => {
      this.setState({
        errorMessage: "",
      });
    }, 4000);
  };

  clearTokenForLogout = () => {
    this.setState({
      idToken: null,
      logoutMsg: "You have been successfully Logged out",
      authorized: false,
    });

    setTimeout(() => {
      this.setState({ logoutMsg: "" });
    }, 2000);
  };

  alertMessage = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type },
    });

    setTimeout(() => {
      this.setState({
        alert: "",
      });
    }, 2000);
  };

  render() {
    console.log(`${this.state.authorized} - authorization`);
    const { porducts, selectedOrders, total } = this.state;
    return (
      <div className="orders">
        {this.state.authorized && (
          <Route
            path="/"
            render={(props) => (
              <Logout clearTokenForLogout={this.clearTokenForLogout} />
            )}
          />
        )}
        <Route
          path="/"
          render={(props) => <LogoutMsg logoutMsg={this.state.logoutMsg} />}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <GroceryContext.Provider value={{ totalPrice: this.totalPrice }}>
              <Grocerys porducts={porducts} />
            </GroceryContext.Provider>
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <OrderedProducts
              remove={this.remove}
              selectedOrders={selectedOrders}
              total={total}
              authorized={this.state.authorized}
            />
          )}
        />
        <Route
          path="/orders"
          exact
          render={(props) =>
            !this.state.authorized ? (
              <Fragment>
                <p className="text-center">you need to login before order.</p>
                <LinkToLogin />
              </Fragment>
            ) : (
              <Contacts
                selectedOrders={selectedOrders}
                userId={this.state.userId}
                alertMessage={this.alertMessage}
                alert={this.state.alert}
              />
            )
          }
        />
        <Route
          path="/auth"
          exact
          render={(props) => (
            <Auth
              {...props}
              authorized={this.state.authorized}
              signInForm={this.signInForm}
              errorMessage={this.state.errorMessage}
            />
          )}
        />
        <Route
          path="/customer"
          exact
          render={(props) => (
            <CustomerOrder
              idToken={this.state.idToken}
              total={this.state.total}
              authorized={this.state.authorized}
            />
          )}
        />
      </div>
    );
  }
}

export default Order;
