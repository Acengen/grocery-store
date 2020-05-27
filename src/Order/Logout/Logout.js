import React, { useContext } from "react";
import { ContextObject } from "../../ContextAPI/ContextApi";

const Logout = () => {
  const context = useContext(ContextObject);
  return (
    <div className="logout-button">
      <button onClick={() => context.clearTokenForLogout()}>Logout</button>
    </div>
  );
};
export default Logout;
