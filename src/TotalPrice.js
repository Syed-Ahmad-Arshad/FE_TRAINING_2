import React from "react";

export default function TotalPrice(props) {
  let sum = props.cart.reduce((accumulator, object) => {
    return accumulator + object.price * object.count;
  }, 0);
  return (
    <>
      {"Total Price"}
      <span className="grand-total">
        {" "}
        {"Rs. "}
        {sum}
      </span>
    </>
  );
}
