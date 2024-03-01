import clsx from "clsx";
import { motion } from "framer-motion";

const ColSplit = ({
  splits = 10,
  TotalDuration = 1,
  className,
}: {
  splits?: number;
  TotalDuration?: number;
  className?: string;
}) => {
  const childDelay = TotalDuration / splits;
  const ColBlockEnter = ({ delay }: { delay: number }) => {
    return (
      <motion.div
        className={clsx("h-full w-[300%] origin-top bg-white", className)}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, delay: delay + 1 }}
      ></motion.div>
    );
  };
  const ColBlockExit = ({ delay }: { delay: number }) => {
    return (
      <motion.div
        className={clsx("h-full w-[300%] origin-left bg-white", className)}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: delay }}
      ></motion.div>
    );
  };
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 grid h-[100vh] w-[100vw] origin-bottom
          grid-flow-col place-items-center"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ gridTemplateColumns: `${100 / splits}%` }}
        key="1"
      >
        {new Array(splits).fill("").map((_, i) => (
          <ColBlockEnter delay={i * childDelay} />
        ))}
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 grid h-[100vh] w-[100vw] origin-bottom
          grid-flow-col place-items-center"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ gridTemplateColumns: `${100 / splits}%` }}
        key="2"
      >
        {new Array(splits).fill("").map((_, i) => (
          <ColBlockExit delay={i * childDelay} />
        ))}
      </motion.div>
    </>
  );
};

export default ColSplit;
