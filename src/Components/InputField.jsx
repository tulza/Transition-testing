import React from "react";
import clsx from "clsx";

const InputLabel = ({ label, error }) => {
  return (
    <div className="input-label flex justify-between py-2">
      <span>{label}</span>
      <span className="text-[red]">{error}</span>
    </div>
  );
};

const InputField = ({
  value,
  placeholder,
  imageUrl,
  onChange,
  error,
  label,
}) => {
  console.log(error);
  return (
    <>
      {label && <InputLabel label={label} error={error} />}
      <div className="flex">
        {imageUrl && (
          <img className="input-logo" src={imageUrl} alt="input field image" />
        )}
        <input
          value={value}
          type="number"
          className={clsx("input-field", error && "input-field-error")}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export { InputField, InputLabel };
