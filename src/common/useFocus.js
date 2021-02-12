import { useState, useEffect } from "react";

export const useFocus = (ref, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    const element = ref.current;
    element.addEventListener("focus", onFocus);
    element.addEventListener("blur", onBlur);

    return () => {
      element.removeEventListener("focus", onFocus);
      element.removeEventListener("blur", onBlur);
    };
  });

  return state;
};
