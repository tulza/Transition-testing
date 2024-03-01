import HeaderText from "@components/HeaderText";
import TransitionAnim from "@components/Transitions/TransitionAnim";

const Contacts = () => {
  return (
    <TransitionAnim>
      <div className="h-full w-full bg-blue-bg">
        <div className="absolute top-0 flex h-full items-center">
          <HeaderText Text="Contacts" />
        </div>
      </div>
    </TransitionAnim>
  );
};

export default Contacts;
