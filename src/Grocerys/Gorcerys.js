import React, { useContext } from "react";
import GroceryContext from "../Context/GroceryContext";

const Gorcerys = ({ porducts }) => {
  const context = useContext(GroceryContext);
  const grocerys = porducts.map((product) => {
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
          >
            +
          </button>
        </div>
      </div>
    );
  });

  return <div className="grocerys">{grocerys}</div>;
};

export default Gorcerys;
