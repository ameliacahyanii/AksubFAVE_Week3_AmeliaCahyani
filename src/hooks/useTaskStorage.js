import { useState, useEffect } from "react";
import { getTodayStr } from "../utils/taskHelpers";

function useTaskStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const today = getTodayStr();
    const saved = localStorage.getItem(key);

    if (saved) {
      const parsed = JSON.parse(saved);
      const filtered = parsed.filter((task) => task.deadline >= today);
      return filtered.length > 0 ? filtered : initialValue;
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useTaskStorage;
