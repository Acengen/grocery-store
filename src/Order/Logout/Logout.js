import React, { useContext } from "react";
import { ContextObject } from "../../ContextAPI/ContextApi";

const Logout = (props) => {
  console.log(props);
  const context = useContext(ContextObject);
  return (
    <div className="logout-button" data-test="logout">
      <button onClick={() => context.clearTokenForLogout()}>Logout</button>
    </div>
  );
};
export default Logout;
