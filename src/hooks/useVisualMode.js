import { useState } from "react";

export default function useVisualMode (intial) {
  const [mode, setMode] = useState(intial);
  const [history, setHistory] = useState([intial]);

  // Function for transitioning to a new mode
  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode((prev) => newMode)
      let historyReplace = [...history];
      historyReplace[historyReplace.length - 1] = mode;
      setHistory((prev) => historyReplace)
    } else {
    setMode((prev) => newMode)
    let historyReplace = [...history];
    historyReplace.push(newMode);
    setHistory((prev) => historyReplace);
    }
  }

  // Function for returning back to previous mode
  const back = () => {
    let historyReplace = [...history];
    historyReplace.pop();
    setHistory((prev) => historyReplace)
    if(history.length > 1) {
      setMode((prev) => historyReplace[(historyReplace.length - 1)]);
    }

  };

  return { mode, transition, back };
}

