import React from "react";

export default function FoodType(props) {
  return (
    <>
      <li>
        <div className="wrapper" onClick={() => props.setIDHandler(props.id)}>
          <span className="text">{props.foodtype}</span>
          <span className="arrow">{">"}</span>
        </div>
      </li>
    </>
  );
}
