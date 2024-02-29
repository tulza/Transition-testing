import React, { useState } from "react";
import SummaryDisplay from "./SummaryDisplay";
import iconDollar from "../../images/icon-dollar.svg";
import iconPerson from "../../images/icon-person.svg";
import TipButtons from "./TipButtons";
import { InputField } from "./InputField";

function isValidNumber(value) {
  const parsedValue = parseFloat(value);
  if (value == "") return "";
  if (isNaN(parsedValue)) return "Must be a number";
  if (parsedValue < 0) return "Cannot be less than zero";
}

const TipApp = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null);
  const [numPeople, setPeople] = useState("");

  const handleReset = () => {
    setBill("");
    setPeople("");
    setTip(null);
  };

  return (
    <div id="calculator-app">
      <div data-testid="tip-form">
        <InputField
          label="bill"
          value={bill}
          imageUrl={iconDollar}
          placeholder="0"
          onChange={(e) => {
            setBill(e.target.value);
          }}
          error={isValidNumber(bill)}
        />
        <TipButtons tip={tip} setTip={setTip} />
        <InputField
          label="Number of People"
          value={numPeople}
          imageUrl={iconPerson}
          placeholder="0"
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          error={parseInt(numPeople) <= 0 && "Can't be less than 0"}
        />
      </div>
      <SummaryDisplay
        bill={bill}
        tip={tip}
        numOfPeople={numPeople}
        handleReset={handleReset}
      />
    </div>
  );
};

export default TipApp;
