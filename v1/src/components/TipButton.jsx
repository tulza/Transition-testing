import { clsx } from "clsx";
import React, { useState } from "react";

const TipButton = ({ tipAmount, onClick, currentTip }) => {
  const isSelected = currentTip === tipAmount;
  // console.log(tipAmount, isSelected);
  return (
    <input
      type="button"
      className={clsx(
        "w-full  flex items-center justify-center p-8 rounded-md bg-blue hover:bg-button-hover hover:text-white transition-all ease-in duration-300",
        isSelected ? "bg-button-hover text-white" : "bg-button"
      )}
      value={`${tipAmount}%`}
      name={`tip-${tipAmount}`}
      onClick={onClick}
    />
  );
};

export default TipButton;
