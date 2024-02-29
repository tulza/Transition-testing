import { motion } from "framer-motion";
import React from "react";

const TestAnim = () => {
  const blockPerRow = 20;
  const blockPerCol = Math.ceil((innerHeight / innerWidth) * blockPerRow);
  const duration = 0.5;
  const fixedStagger = duration / blockPerRow;
  return (
    <>
      <div
        className=" pointer-events-none fixed left-0 top-0 grid h-[100vh] w-[100vw] place-items-center items-start border border-red-600"
        style={{ gridTemplateColumns: `repeat(${blockPerRow},1fr)` }}
      >
        {new Array(blockPerRow).fill("").map((_, i) => (
          <BlockEnter
            blockInCol={blockPerCol}
            stagger={fixedStagger * i}
            fixedStagger={fixedStagger}
          />
        ))}
      </div>
      <div
        className=" pointer-events-none fixed left-0 top-0 grid h-[100vh] w-[100vw] place-items-center items-start border border-red-600"
        style={{ gridTemplateColumns: `repeat(${blockPerRow},1fr)` }}
      >
        {new Array(blockPerRow).fill("").map((_, i) => (
          <BlockExit
            blockInCol={blockPerCol}
            stagger={fixedStagger * i}
            fixedStagger={fixedStagger}
          />
        ))}
      </div>
    </>
  );
};

const BlockEnter = ({
  blockInCol,
  stagger,
  fixedStagger,
}: {
  blockInCol: number;
  stagger: number;
  fixedStagger: number;
}) => {
  return (
    <div className="flex w-full flex-col">
      {new Array(blockInCol).fill("").map((_, i) => (
        <motion.div
          className="aspect-square w-full origin-center bg-white"
          transition={{
            delay: stagger + fixedStagger * i,
            duration: 0,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          exit={{ scale: 0 }}
        />
      ))}
    </div>
  );
};

const BlockExit = ({
  blockInCol,
  stagger,
  fixedStagger,
}: {
  blockInCol: number;
  stagger: number;
  fixedStagger: number;
}) => {
  return (
    <div className="flex w-full flex-col">
      {new Array(blockInCol).fill("").map((_, i) => (
        <motion.div
          className="aspect-square w-full origin-center bg-white"
          transition={{
            delay: stagger + fixedStagger * i,
            duration: 0,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 0 }}
          exit={{ scale: 1 }}
        />
      ))}
    </div>
  );
};

export default TestAnim;
