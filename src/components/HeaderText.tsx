import React from "react";

const HeaderText = ({ Text }: { Text: string }) => {
  return (
    <div className="fancyFont ml-8 text-5xl font-bold text-gray-900">
      {Text}
    </div>
  );
};

export default HeaderText;
