import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4>Contacts</h4>
        <p>Mobile: +969 666 666</p>
        <p>Email: test@test.com</p>
      </div>
      <div>
        <h4>Links:</h4>
        <p>
          <Link to="/customer">Your Orders</Link>
        </p>
        <p>
          <Link to="/auth">Login Form</Link>
        </p>
        <p>
          <Link to="/orders">Order Form</Link>
        </p>
      </div>
      <div>
        <h4>Other Usefull Links:</h4>
        <p>
          <a href="https://en.wikipedia.org/wiki/Carrot">Carrot wiki</a>
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Tomato">Tomatoe wiki</a>
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Apple">Apple wiki</a>
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Banana">Banana wiki</a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
