import "@styles/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "@components/Navigation";
import AnimatedRoute from "@components/AnimatedRoute";

function App() {
  return (
    <Router basename="/Transition-testing">
      <Navigation />
      <AnimatedRoute />
    </Router>
  );
}

export default App;
