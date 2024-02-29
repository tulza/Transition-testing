import { motion } from "framer-motion";

const ColSplitRounded = ({
  splits = 20,
  TotalDuration = 1,
}: {
  splits?: number;
  TotalDuration?: number;
}) => {
  const childDelay = TotalDuration / splits;
  const ColBlockEnter = ({ delay }: { delay: number }) => {
    return (
      <motion.div
        className="h-[125%] w-[200%] origin-left rounded-[250px] bg-white"
        initial={{ scaleX: 1, scaleY: 1 }}
        animate={{ scaleX: 0, scaleY: 0 }}
        exit={{ scaleX: 0, scaleY: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      ></motion.div>
    );
  };
  const ColBlockExit = ({ delay }: { delay: number }) => {
    return (
      <motion.div
        className="h-[125%] w-[200%] origin-right rounded-[250px] bg-white "
        initial={{ scaleX: 0, scaleY: 0 }}
        animate={{ scaleX: 0, scaleY: 0 }}
        exit={{ scaleX: 1, scaleY: 1 }}
        transition={{ duration: 0.5, delay: delay }}
      ></motion.div>
    );
  };
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 grid h-[100vh] w-[100vw] origin-bottom grid-flow-col place-items-center"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ gridTemplateColumns: `${100 / splits}%` }}
      >
        {new Array(splits).fill("").map((_, i) => (
          <ColBlockEnter key={i} delay={i * childDelay} />
        ))}
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 grid h-[100vh] w-[100vw] origin-bottom grid-flow-col place-items-center"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ gridTemplateColumns: `${100 / splits}%` }}
      >
        {new Array(splits).fill("").map((_, i) => (
          <ColBlockExit key={i} delay={i * childDelay} />
        ))}
      </motion.div>
    </>
  );
};

export default ColSplitRounded;
