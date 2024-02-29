import { motion } from "framer-motion";
import React from "react";
import SlideInTransition from "./SlideInTransition";
import ColSplitRounded from "./ColSplitRounded";
import ColSplit from "./ColSplit";
import TestAnim from "./TestAnim";

type TransitionTypes = {
  children: React.ReactNode;
  type?: "default" | "ColSplit" | "ColSplit2";
};

const TransitionAnim = ({ children, type = "test1" }: TransitionTypes) => {
  return (
    <>
      {children}
      {type == "default" && <SlideInTransition />}
      {type == "ColSplit" && <ColSplitRounded />}
      {type == "ColSplit2" && <ColSplit />}
      {type == "test1" && <TestAnim />}
    </>
  );
};

export default TransitionAnim;
