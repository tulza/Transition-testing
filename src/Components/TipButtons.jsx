import React from "react";
import { InputField, InputLabel } from "./InputField";
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

const TipButtons = ({ setTip, tip }) => {
  const tipRange = [5, 10, 15, 25, 50];

  return (
    <>
      <InputLabel label="Select Tip %" />
      <div id="tip-grid" className="grid grid-cols-3 gap-4">
        {tipRange.map((value) => {
          return (
            <TipInputButton
              key={value}
              value={value}
              activeTip={tip}
              onClick={() => {
                setTip(value);
              }}
            />
          );
        })}
        <InputField
          placeholder="Custom"
          value={tip}
          onChange={(e) => {
            setTip(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default TipButtons;
