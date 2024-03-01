import HeaderText from "@components/HeaderText";
import TransitionAnim from "@components/Transitions/TransitionAnim";

const About = () => {
  return (
    <TransitionAnim>
      <div className="relative h-full w-full bg-green-bg">
        <div className="absolute top-0 flex h-full items-center">
          <HeaderText Text="About" />
        </div>
      </div>
    </TransitionAnim>
  );
};

export default About;
