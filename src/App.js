import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/main.css";

import Container from "./containers/Container";
import Navbar from "./Navbar/Navbar";
import Order from "./Order/Order";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Route path="/" exact component={Header} />
          <Route path="/" render={()=> <Order auth={true}/>} />
          <Route path="/" exact component={Footer} />
        </Container>
      </Router>
    );
  }
}

export default App;
