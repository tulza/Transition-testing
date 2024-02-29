import { motion } from "framer-motion";

const SlideInTransition = () => {
  return (
    <>
      {/* Enter animation */}
      <motion.div
        className="fixed left-0 top-0 h-[100vh] w-full origin-top bg-white"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Exit animation */}
      <motion.div
        className="fixed left-0 top-0 h-[100vh] w-full origin-bottom bg-white"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default SlideInTransition;
