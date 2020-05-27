import React, { useContext } from "react";
import { ContextObject } from "../../ContextAPI/ContextApi";

const LogoutMsg = () => {
  const context = useContext(ContextObject);
  return <div className="logout-msg">{context.logoutMsg}</div>;
};

export default LogoutMsg;
