import { useState, useEffect } from "react";

function getSavedValue(key: string, initialValue: string | (() => string)) {
  const savedValue = localStorage.getItem(key);

  if (savedValue !== null) {
    try {
      return JSON.parse(savedValue);
    } catch (error) {
      console.error("error parsing savedValue from localStorage:", error);
    }
  }

  if (typeof initialValue === "function") {
    return initialValue();
  }

  return initialValue;
}

export default function useLocaleStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("value:", value);
    console.log("key:", key);
  }, [key, value]);

  return [value, setValue] as const;
}

