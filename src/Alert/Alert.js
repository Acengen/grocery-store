import React from "react";

const Alert = (props) => {
  return (
    props.alert !== null && (
      <div
        className={`alert alert-${props.alert.type} text-center font-weight-bold`}
      >
        {props.alert.msg}
      </div>
    )
  );
};
export default Alert;
