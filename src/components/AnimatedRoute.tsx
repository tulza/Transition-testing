import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Contacts from "@pages/Contacts";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";

export const TransitionScreenContext = createContext("");

const AnimatedRoute = () => {
  const location = useLocation();
  const TransitionType = "default";
  return (
    <TransitionScreenContext.Provider value={TransitionType}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/main" element={<Home />} />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </AnimatePresence>
    </TransitionScreenContext.Provider>
  );
};

export default AnimatedRoute;
