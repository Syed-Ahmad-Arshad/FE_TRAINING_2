import "./App.css";
import FoodType from "./FoodType";
import FoodItem from "./FoodItem";
import { useState } from "react";
import ItemPrice from "./ItemPrice";
import TotalPrice from "./TotalPrice";
import { useEffect } from "react";
import { render } from "@testing-library/react";

function App() {
  let state = [
    {
      id: 0,
      foodtype: "BAR B Q",
      foodmenu: [
        { id: 0, name: "Tikka", price: 450 },
        { id: 1, name: "Malai Boti", price: 550 },
        { id: 2, name: "Sajji", price: 950 },
        { id: 3, name: "Broast", price: 350 },
      ],
    },
    {
      id: 1,
      foodtype: "BURGER",
      foodmenu: [
        { id: 0, name: "Shami Burger", price: 150 },
        { id: 1, name: "Simple Fillet", price: 450 },
        { id: 2, name: "Beef Attack", price: 550 },
        { id: 3, name: "Chicken Cheese", price: 550 },
        { id: 4, name: "Tangy Jalapeno", price: 550 },
        { id: 5, name: "Cheesy Mushroom", price: 550 },
        { id: 6, name: "Chicken Smokey", price: 550 },
      ],
    },
    ,
    {
      id: 2,
      foodtype: "CHINESE",
      foodmenu: [
        { id: 0, name: "Shrimp Appetizer", price: 150 },
        { id: 1, name: "Kung Pao Chicken", price: 450 },
        { id: 2, name: "Dim Sum", price: 550 },
        { id: 3, name: "Dumplings", price: 550 },
        { id: 4, name: "Sushi", price: 550 },
        { id: 5, name: "Peeking Roasted", price: 550 },
        { id: 6, name: "Ma Po Tofu", price: 550 },
        { id: 7, name: "Char Siu", price: 150 },
        { id: 8, name: "Chow Mein", price: 450 },
        { id: 9, name: "Fried Rice", price: 550 },
        { id: 10, name: "Sichuan Pork", price: 550 },
        { id: 11, name: "Xiaolongbao", price: 550 },
      ],
    },
    {
      id: 3,
      foodtype: "DRINKS",
      foodmenu: [
        { id: 0, name: "Pinacolada", price: 250 },
        { id: 1, name: "Mint Attack", price: 450 },
        { id: 2, name: "Rooh Afza", price: 150 },
        { id: 3, name: "Sandel Wood", price: 650 },
        { id: 4, name: "Mint Margarita", price: 250 },
        { id: 5, name: "Diet Coke", price: 150 },
        { id: 6, name: "Fresh Lime", price: 50 },
        { id: 7, name: "Sunset", price: 90 },
        { id: 8, name: "Lime and Berry", price: 190 },
        { id: 9, name: "Pineapple Slush ", price: 155 },
      ],
    },
    {
      id: 4,
      foodtype: "FRESH JUICES",
      foodmenu: [
        { id: 0, name: "Strawberry", price: 250 },
        { id: 1, name: "Coconut Juice", price: 450 },
        { id: 2, name: "Mango Necter", price: 150 },
        { id: 3, name: "Red Grapes", price: 650 },
        { id: 4, name: "Pineapple Necter", price: 250 },
        { id: 5, name: "Orange", price: 150 },
        { id: 6, name: "Apple Shapple", price: 50 },
      ],
    },
    {
      id: 5,
      foodtype: "ICE CREAMS",
      foodmenu: [
        { id: 0, name: "Chocbar", price: 250 },
        { id: 1, name: "Blueberry", price: 450 },
        { id: 2, name: "Tutti Frutti", price: 150 },
        { id: 3, name: "Baskin's Special", price: 650 },
        { id: 4, name: "Dipped Cone", price: 250 },
        { id: 5, name: "Brownie Cone", price: 150 },
        { id: 6, name: "Hot Chocolate", price: 50 },
        { id: 7, name: "Vanilla & Brownie", price: 90 },
      ],
    },
    {
      id: 6,
      foodtype: "MEATY",
      foodmenu: [
        { id: 0, name: "Kebab", price: 250 },
        { id: 1, name: "Beef Steak", price: 450 },
        { id: 2, name: "Handi Special", price: 150 },
        { id: 3, name: "Delhi Nehari", price: 650 },
        { id: 4, name: "Bombay Biryani", price: 250 },
        { id: 5, name: "Achaar Gosht", price: 150 },
        { id: 6, name: "Qourma", price: 50 },
      ],
    },
    {
      id: 7,
      foodtype: "PIZZA",
      foodmenu: [
        { id: 0, name: "German Special", price: 250 },
        { id: 1, name: "Fajita", price: 450 },
        { id: 2, name: "Jalapeno Attack", price: 150 },
        { id: 3, name: "Chicken Supreme", price: 650 },
        { id: 4, name: "Salami Special", price: 250 },
        { id: 5, name: "Malai Boti", price: 150 },
        { id: 6, name: "Cheesy Crust", price: 50 },
        { id: 7, name: "Sausage Special", price: 90 },
        { id: 8, name: "All Veg Special", price: 190 },
        { id: 9, name: "New Yorker", price: 155 },
        { id: 10, name: "Chicken Tikka", price: 250 },
        { id: 11, name: "Thin Crust", price: 450 },
        { id: 12, name: "Deep Pan", price: 150 },
      ],
    },
    {
      id: 8,
      foodtype: "SALADS",
      foodmenu: [
        { id: 0, name: "Russain Salad", price: 250 },
        { id: 1, name: "Simple Salad", price: 450 },
        { id: 2, name: "Special Salad", price: 150 },
        { id: 3, name: "Pineapple Salad", price: 650 },
        { id: 4, name: "Beet Root Salad", price: 650 },
      ],
    },
    {
      id: 9,
      foodtype: "SEA FOODS",
      foodmenu: [
        { id: 0, name: "Shrimps and Rice", price: 250 },
        { id: 1, name: "Tuna", price: 450 },
        { id: 2, name: "Lobster", price: 150 },
        { id: 3, name: "Shrimps Dynamite", price: 650 },
        { id: 4, name: "Shrimpy Noodles", price: 250 },
        { id: 5, name: "Crab Cake", price: 150 },
        { id: 6, name: "Oyster", price: 50 },
      ],
    },
    {
      id: 10,
      foodtype: "SOUPS",
      foodmenu: [
        { id: 0, name: "Chicken Corn", price: 250 },
        { id: 1, name: "Fish Corn", price: 450 },
        { id: 2, name: "Soya Attack", price: 150 },
        { id: 3, name: "Brocolli Cheese", price: 650 },
        { id: 4, name: "Florentine", price: 250 },
        { id: 5, name: "Loaded Potato", price: 150 },
        { id: 6, name: "Chicken Tottilla", price: 50 },
      ],
    },
    {
      id: 11,
      foodtype: "SOUPS",
      foodmenu: [
        { id: 0, name: "Mango Custard", price: 250 },
        { id: 1, name: "Rass Gulay", price: 450 },
        { id: 2, name: "Gulab Jamun", price: 150 },
        { id: 3, name: "Sewian", price: 650 },
        { id: 4, name: "Sheer Khurma", price: 250 },
        { id: 5, name: "Pineapple Pie", price: 150 },
        { id: 6, name: "Cheese Cake", price: 50 },
        { id: 7, name: "Vanilla Pudding", price: 90 },
      ],
    },
  ];
  const [id, setID] = useState(0);
  const setIDHandler = (id) => {
    setID(id);
  };
  const [cart, setCart] = useState([]);
  const setCartHandler = (newCart) => {
    let flag = false;
    let index = 0;
    cart.forEach((data, index_) => {
      if (data.name == newCart.name) {
        flag = true;
        index = index_;
      }
    });
    if (!flag) setCart([...cart, newCart]);
    else {
      let newCartState = cart;
      newCartState[index].count++;
      setCart([...newCartState]);
    }
  };

  const incrementor = (index) => {
    let newCartState = cart;
    newCartState[index].count++;
    setCart([...newCartState]);
  };
  const decrementor = (index) => {
    let newCartState = cart;
    if (cart[index].count > 0) {
      newCartState[index].count--;
      if (cart[index].count == 0) {
        newCartState = newCartState.filter(function (obj) {
          return obj.count != 0;
        });
      }
      setCart([...newCartState]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <html>
      <head>
        <title>Restaurant | Adam Lane</title>
      </head>
      <body>
        <header className="header">
          <div className="item1">
            <span className="greytext">Rest</span>aurant
          </div>
          <div className="item2">
            <img src="./bellicon.png" className="bellicon" />
          </div>
          <div className="item3">
            <span className="adamname">Adam Lane</span>
            <img src="./facepic.png" className="facepic" />
          </div>
        </header>
        <main className="main">
          <div className="main-item-1">
            <div className="category-head">
              <span className="text">Categories</span>
              <span id="counter">({Object.keys(state).length})</span>
            </div>
            <ul id="food-menu">
              {state.map((data, index) => (
                <FoodType
                  key={index}
                  foodtype={data.foodtype}
                  id={index}
                  setIDHandler={setIDHandler}
                />
              ))}
            </ul>
          </div>
          <div className="main-item-2">
            <div className="searchbar">
              <div className="flex-container">
                <div className="row1">
                  <img src="search.png" className="search" />
                  <span className="text">Search Item</span>
                </div>
                <div id="food-item-container">
                  {state[id].foodmenu.map((data) => (
                    <FoodItem
                      name={data.name}
                      price={data.price}
                      setCartHandler={setCartHandler}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main-item-3">
            <div className="cart-items-head">
              <span className="cart-items-text">Cart Items</span>
              <button id="btn-green">{cart.length}</button>
              <img src="dots.png" className="dotspic" />
            </div>
            <div id="pricing-container">
              {cart.map((data, ind) => (
                <ItemPrice
                  name={data.name}
                  price={data.price}
                  count={data.count}
                  ind={ind}
                  incrementor={incrementor}
                  decrementor={decrementor}
                  currentCount={cart[ind].count}
                />
              ))}
            </div>
            <div id="total-price-container">{<TotalPrice cart={cart} />}</div>
            <button id="button-cancel" onClick={() => clearCart()}>
              Cancel
            </button>
            <button id="button-proceed">Proceed</button>
          </div>
        </main>
      </body>
    </html>
  );
}

export default App;
