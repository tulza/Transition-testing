import React, { useState } from "react";

const InputBox = ({ label, imageFile, onChange }) => {
  const [activeValue, setValue] = useState(0);
  let errorValue = "";
  return (
    <>
      <div>
        <div className="flex justify-between mb-2">
          <span>{label}</span> <span id="input-out-error">{}</span>
        </div>
        <div className="flex">
          <img className="input-logo" src={imageFile} />
          <input type="Input" className="input-box" onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default InputBox;
