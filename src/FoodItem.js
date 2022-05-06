import React from "react";

export default function FoodItem(props) {
  return (
    <>
      <div className="one">
        <div className="food-name">{props.name}</div>
        <div className="food-price">{props.price}</div>
        <div className="btndiv">
          <button
            className="btn-black"
            onClick={() =>
              props.setCartHandler({
                name: props.name,
                price: props.price,
                count: 1,
              })
            }
          >
            {"ADD TO CART"}
          </button>
        </div>
      </div>
    </>
  );
}
