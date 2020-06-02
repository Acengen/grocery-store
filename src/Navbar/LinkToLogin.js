import React from "react";
import { Link } from "react-router-dom";

const LinkToLogin = (props) =>
  props.success && (
    <div className="text-center" data-test="component-login">
      <button className="link-to-login" data-test="button-login">
        <Link to="/auth">Go to login page</Link>
      </button>
    </div>
  );

export default LinkToLogin;
