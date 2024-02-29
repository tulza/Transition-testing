import React, { useState, useRef } from "react";
import InputBox from "./InputBox";
import TipButton from "./TipButton";
import CalculatedSummary from "./SummaryDisplay";

const Form = () => {
  const [bill, setBill] = useState(null);

  // currently select tip amount - number or null
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState(null);
  const [numOfPeople, setPeople] = useState(null);
  const tipRange = [5, 10, 15, 25, 50];

  return (
    <form id="tip-box-container">
      <div id="calculate-box">
        <InputBox
          label="Bill"
          imageFile="./images/icon-dollar.svg"
          value={bill}
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
        <div>
          <p className="mb-2">Select Tip %</p>
          <div id="tip-sel-grid">
            {tipRange.map((value) => {
              return (
                <TipButton
                  key={value}
                  tipAmount={value}
                  currentTip={customTip}
                  onClick={() => {
                    setCustomTip(value);
                  }}
                />
              );
            })}

            <input
              type="Input"
              className="input-box"
              name="tip-custom"
              placeholder="Custom"
              value={customTip}
              onChange={(e) => {
                setCustomTip(e.target.value);
              }}
            />
          </div>
        </div>
        <InputBox
          label={"Number of people"}
          imageFile="./images/icon-person.svg"
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
      </div>
      <div id="summary" className="w-full">
        <CalculatedSummary
          bill={bill}
          tip={tip}
          customTip={customTip}
          numOfPeople={numOfPeople}
        />
        <input
          type="button"
          id="reset-button"
          value="RESET"
          onClick={() => {
            setCustomTip("");
          }}
        />
      </div>
    </form>
  );
};

export default Form;
