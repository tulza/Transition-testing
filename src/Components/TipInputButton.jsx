import React from "react";
import { clsx } from "clsx";

const TipInputButton = ({ value, activeTip, onClick }) => {
  const isSelected = value === activeTip;

  return (
    <input
      type="button"
      className={clsx(
        "input-button",
        isSelected ? "input-button-selected" : ""
      )}
      value={`${value}%`}
      onClick={onClick}
    />
  );
};

export default TipInputButton;
