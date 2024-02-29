import { clsx } from "clsx";
import React from "react";

const SumamryRow = ({ label, perLabel, value }) => {
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <p className="summary-label">{label}</p>
        <p className="summary-perLabel">/ {perLabel}</p>
      </div>
      <span className="summary-total text-[50px]">
        $<span>{value}</span>
      </span>
    </div>
  );
};

export const SummaryDisplay = ({
  bill,
  tip,
  customTip,
  numOfPeople,
  handleReset,
}) => {
  let tipAmount = 0;
  let tipPerPerson = "0.00";
  let total = "0.00";
  //enable calculation when inputs below has a value
  if (bill && numOfPeople && (tip || customTip)) {
    //if there are custom tip use value
    if (customTip) {
      tipAmount = customTip / 100;
    } else {
      tipAmount = tip / 100;
    }

    // Calculate tip and total here 2d.p.
    tipPerPerson = Math.floor((100 * (bill * tipAmount)) / numOfPeople) / 100;
    total = Math.round((100 * (bill * (1 + tipAmount))) / numOfPeople) / 100;
  }
  return (
    <div id="summary-container" className="flex flex-col justify-between">
      <div>
        <SumamryRow label="Tip Amount" perLabel="person" value={tipPerPerson} />
        <SumamryRow label="Total" perLabel="person" value={total} />
      </div>
      <input
        type="button"
        id={clsx(
          bill || tip || customTip || numOfPeople
            ? "reset-button"
            : "reset-button-disabled"
        )}
        value="RESET"
        onClick={handleReset}
      />
    </div>
  );
};

export default SummaryDisplay;
