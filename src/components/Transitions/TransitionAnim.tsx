import React from "react";
import SlideInTransition from "./SlideInTransition";
import ColSplitRounded from "./ColSplitRounded";
import ColSplit from "./ColSplit";
import TestAnim from "./TestAnim";

type TransitionTypes = {
  children: React.ReactNode;
  type?: "default" | "ColSplit" | "ColSplit2" | "test";
};

const TransitionAnim = ({ children, type = "ColSplit2" }: TransitionTypes) => {
  return (
    <>
      {children}
      {type == "default" && <SlideInTransition className="z-[9999]" />}
      {type == "ColSplit" && <ColSplitRounded className="z-[9999]" />}
      {type == "ColSplit2" && <ColSplit className="z-[9999]" />}
      {type == "test" && <TestAnim className="z-[9999]" />}
    </>
  );
};

export default TransitionAnim;
