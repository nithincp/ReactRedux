import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../reduxFolder";

function HooksIcecreamContainer() {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
    </div>
  );
}

export default HooksIcecreamContainer;
