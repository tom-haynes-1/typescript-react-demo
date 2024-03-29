import React, { useEffect } from "react";
import useLocaleStorage from "../../hooks/useLocaleStorage";

const ButtonStorage: React.FC = () => {
  const [value, setValue] = useLocaleStorage("Test", "Default Value");

  const handleButtonClick = () => {
    const newValue = "new value";
    setValue(newValue);
  };

  useEffect(() => {
    console.log("Value from localStorage:", value);
  }, [value]);

  return (
    <div>
      <p>Value from localStorage: {value}</p>
      <button onClick={handleButtonClick}>Change Value</button>
    </div>
  );
};

export default ButtonStorage;
