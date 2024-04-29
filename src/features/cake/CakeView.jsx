import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, restocked } from "./cakeSlice";

const CakeView = () => {
  const noofcakes = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>nof cakes -{noofcakes}</h1>
      <button onClick={() => dispatch(buyCake())}>order cake</button>
      <button onClick={() => dispatch(restocked(3))}>restock cake</button>
    </div>
  );
};

export default CakeView;
