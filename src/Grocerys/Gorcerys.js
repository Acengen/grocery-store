import React, { useContext } from "react";
import { ContextObject } from "../ContextAPI/ContextApi";

const Gorcerys = () => {
  const context = useContext(ContextObject);
  const grocerys = context.products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img
          src={product.picture}
          style={{ width: "100%", height: "200px" }}
          alt="grocery"
        />
        <div className="card-body">
          <p>{product.name}</p>
          <p className="font-weight-bold">1kg / ${product.price}</p>

          <button
            onClick={() => context.totalPrice(product.price, product)}
            className="grocery-button"
            data-test="add-btn"
          >
            +
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="grocerys" data-test="products">
      {grocerys}
    </div>
  );
};

export default Gorcerys;
