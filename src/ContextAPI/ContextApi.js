import React, { useState } from "react";
import axios from "axios";

export const ContextObject = React.createContext({
  products: [],
  selectedOrders: [],
  total: 0,
  totalPrice: () => {},
  remove: () => {},
  alertMessage: () => {},
  alert: "",
  getDataFromDB: () => {},
  signInForm: () => {},
  signIn: () => {},
  signOut: () => {},
  clearTokenForLogout: () => {},
  fetchData: [],
  token: null,
  userId: null,
  authorized: "",
  errorMsg: "",
  isSign: "",
  logoutMsg: "",
});

const ContextProv = (props) => {
  const [productsData, setProductsData] = useState([
    {
      name: "Carrot",
      picture: "https://ak.picdn.net/shutterstock/videos/18688502/thumb/1.jpg",
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
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [alert, setAlertMsg] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [authorized, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSign, setIsSignIn] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState("");

  const getDataFromDB = () => {
    const query = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get("https://grocery-store-d17ed.firebaseio.com/orders.json" + query)
      .then((response) => {
        const ordersArray = [];
        for (let key in response.data) {
          ordersArray.push(response.data[key].orders);
        }
        setFetchData(ordersArray);
      })
      .catch((error) => console.log(error.response.data.error));
  };

  const totalPrice = (price, product) => {
    let oldPrice = total;
    let newPrice = oldPrice + price;
    let select = [...selectedOrders, product];

    setSelectedOrders(select);

    setTotal(newPrice);
  };

  const remove = (price, index) => {
    let oldPrice = total;
    let newPrice = oldPrice - price;
    let select = [...selectedOrders];
    select.splice(index, 1);

    setSelectedOrders(select);
    setTotal(newPrice);

    if (newPrice < 0) {
      setTotal({ total: 0 });
    }
  };

  const alertMessage = (msg, type) => {
    let alert = {
      msg: msg,
      type: type,
    };
    setAlertMsg(alert);

    setTimeout(() => {
      setAlertMsg({ alert: "" });
    }, 2000);
  };

  const signInForm = (email, password) => {
    const signData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFwsvaCT8sMufl5wko9QfCkdR3kVqu2nQ";

    if (isSign) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFwsvaCT8sMufl5wko9QfCkdR3kVqu2nQ";
    }

    axios
      .post(url, signData)
      .then((response) => {
        setAuth(true);
        setIdToken(response.data.idToken);
        setUserId(response.data.localId);
      })
      .catch((error) => {
        setErrorMsg(error.response.data.error.message);
      });

    setTimeout(() => {
      setErrorMsg("");
    }, 4000);
  };

  const signIn = () => {
    setIsSignIn(true);
  };

  const signOut = () => {
    setIsSignIn(false);
  };

  const clearTokenForLogout = () => {
    setIdToken(null);
    setAuth(false);
    setLogoutMsg("Logged out");

    setTimeout(() => {
      setLogoutMsg("");
    }, 2000);
  };

  return (
    <ContextObject.Provider
      value={{
        products: productsData,
        total: total,
        selectedOrders: selectedOrders,
        totalPrice: totalPrice,
        remove: remove,
        alertMessage: alertMessage,
        getDataFromDB: getDataFromDB,
        signInForm: signInForm,
        signIn: signIn,
        signOut: signOut,
        clearTokenForLogout: clearTokenForLogout,
        alert: alert,
        fetchData: fetchData,
        token: idToken,
        userId: userId,
        authorized: authorized,
        errorMsg: errorMsg,
        isSign: isSign,
        logoutMsg: logoutMsg,
      }}
    >
      {props.children}
    </ContextObject.Provider>
  );
};

export default ContextProv;
