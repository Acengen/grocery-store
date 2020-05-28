import React, { useContext } from "react";
import OrderedItems from "./OrderedItems";
import TotalPrice from "../totalPrice/TotalPrice";
import LinkToForm from "./LinkToForm/LinkToForm";
import { ContextObject } from "../ContextAPI/ContextApi";

const OrderedProducts = () => {
  const context = useContext(ContextObject);

  const selected = context.selectedOrders.map((selectedOrder, index) => {
    return (
      <OrderedItems
        selectedOrder={selectedOrder}
        index={index}
        key={Math.random() * 1000}
      />
    );
  });

  if (context.selectedOrders.length !== 0) {
    return (
      <div className="selectedProducts">
        <h3 className="text-center">Your Order</h3>
        {selected}
        <TotalPrice />
        <LinkToForm />
      </div>
    );
  } else {
    return null;
  }
};

export default OrderedProducts;
