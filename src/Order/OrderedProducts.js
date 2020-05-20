import React from "react";
import OrderedItems from "./OrderedItems";
import TotalPrice from "../totalPrice/TotalPrice";
import LinkToForm from "./LinkToForm/LinkToForm";

const OrderedProducts = ({ selectedOrders, remove, total, authorized }) => {
  console.log("[orderedProducts.js] render ...");
  const selected = selectedOrders.map((selectedOrder, index) => {
    return (
      <OrderedItems
        selectedOrder={selectedOrder}
        remove={remove}
        index={index}
        key={Math.random() * 1000}
      />
    );
  });

  if (selectedOrders.length !== 0) {
    return (
      <div className="selectedProducts">
        <h3 className="text-center">Your Order</h3>
        {selected}
        <TotalPrice total={total} />
        <LinkToForm authorized={authorized} />
      </div>
    );
  } else {
    return null;
  }
};

export default OrderedProducts;
