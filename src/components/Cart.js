import React, { useEffect, useState } from "react";
import { data } from "../data.js";

export default function Cart() {
  const [quantity, setQuantity] = useState([0, 0, 0, 0, 0]);
  const [cartTotal, setCartTotal] = useState(0);
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
      total += quantity[i] * data[i].price;
    }
    setCartTotal(total);
  }, [quantity]);

  const handleQtyIncrement = (e, id) => {
    const newQuantity = [...quantity];
    newQuantity[id] += 1;
    setQuantity(newQuantity);
    console.log("incrementing", e.target, id);
  };
  const handleQtyDecrement = (e, id) => {
    const newQuantity = [...quantity];
    newQuantity[id] = newQuantity[id] > 0 ? newQuantity[id] - 1 : 0;
    setQuantity(newQuantity);
    console.log("decrementing", e.target, id);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Cart</h1>
        <div>
          {data.map((item) => (
            <div
              //   key={item.id}
              style={{
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* {setCurrentID(item.id)} */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "3rem", height: "3rem" }}
                />
                <div>
                  <div>{item.name}</div>
                  <div>(${item.price})</div>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "1rem",
                }}
              >
                Qty: {quantity[item.id - 1]}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ fontSize: "2rem" }}
                    // onClick={handleQtyDecrement}
                    onClick={(event) => handleQtyDecrement(event, item.id - 1)}
                  >
                    -
                  </div>
                  <div
                    style={{ fontSize: "2rem" }}
                    // onClick={handleQtyIncrement}
                    onClick={(event) => handleQtyIncrement(event, item.id - 1)}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Total</h1>
        <div style={{ fontSize: "5rem" }}>${cartTotal}</div>
      </div>
    </div>
  );
}
