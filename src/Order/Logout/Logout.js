import React from "react";

const Logout = (props) => {
  return (
    <div className="logout-button">
      <button onClick={() => props.clearTokenForLogout()}>Logout</button>
    </div>
  );
};
export default Logout;
