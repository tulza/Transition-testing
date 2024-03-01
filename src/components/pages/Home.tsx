import HeaderText from "@components/HeaderText";
import TransitionAnim from "@components/Transitions/TransitionAnim";

const Home = () => {
  return (
    <TransitionAnim>
      <div className="h-full w-full bg-red-bg">
        <div className="absolute top-0 flex h-full items-center">
          <HeaderText Text="Home" />
        </div>
      </div>
    </TransitionAnim>
  );
};

export default Home;
