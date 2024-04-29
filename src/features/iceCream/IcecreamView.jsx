import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const numberOfIcecream = useSelector(
    (state) => state.icecream.numberOfIcecream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>nof icecreams -{numberOfIcecream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>order icecream</button>
      <button onClick={() => dispatch(restocked(3))}>restock icecream</button>
    </div>
  );
};

export default IcecreamView;
