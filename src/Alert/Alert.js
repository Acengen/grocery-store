import React, { useContext } from "react";
import { ContextObject } from "../ContextAPI/ContextApi";

const Alert = () => {
  const context = useContext(ContextObject);
  return (
    context.alert !== null && (
      <div
        className={`alert alert-${context.alert.type} text-center font-weight-bold`}
      >
        {context.alert.msg}
      </div>
    )
  );
};
export default Alert;
