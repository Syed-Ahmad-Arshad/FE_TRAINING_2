import React from "react";

export default function ItemPrice(props) {
  return (
    <>
      <div class="pricing-item">
        <span class="food-cart-name">{props.name}</span>
        <div class="incrementor">
          <button
            class="minus-button"
            onClick={() => props.decrementor(props.ind)}
          >
            -
          </button>
          <span class="foodcount">{props.currentCount}</span>
          <button
            class="plus-button"
            onClick={() => props.incrementor(props.ind)}
          >
            +
          </button>
        </div>
        <div class="pricing-grid">
          <div class="text-total">{"Total "}</div>
          <div class="food-cart-price">
            {"Rs. "}
            {props.price * props.count}
          </div>
        </div>
      </div>
    </>
  );
}
