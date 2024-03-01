import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <div className="fancyFont absolute z-[999] flex w-full justify-center gap-8 p-8">
        <NavButton name="main" />
        <NavButton name="about" />
        <NavButton name="contacts" />
      </div>
    </>
  );
};

const NavButton = ({ name }: { name: string }) => {
  return (
    <Link to={`${name}`}>
      <motion.div whileHover="hover">
        <motion.div
          className="border-background bg-element border-b-4 p-4 px-8 text-black"
          variants={{ hover: { y: 10, borderColor: "var(--white)" } }}
        >
          <code>{name}</code>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navigation;
