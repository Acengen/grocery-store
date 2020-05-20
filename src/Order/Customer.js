import React from "react";

const Customer = (props) =>
  props.order.map((ord) => {
    return (
      <div
        className="card"
        key={Math.random() * 100}
        style={{
          width: "200px",
          borderRadius: "0px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <div className="card-body">
          <h4>{ord.name}</h4>
          <p>${ord.price}</p>
        </div>
      </div>
    );
  });

export default Customer;
