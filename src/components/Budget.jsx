import React, { useState } from "react";
import Axios from "axios";
import { AppContext } from "../context/AppContext";
import "./App.css";
import App from "../App";

const Budget = () => {
  const { budget } = useContext(AppContext);
};

return (
  <div>
    <span> Budget: ${budget}</span>
  </div>
);

export default Budget;
