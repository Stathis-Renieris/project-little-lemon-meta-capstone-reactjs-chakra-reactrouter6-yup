import { useState, useContext, createContext } from "react";

const AlertContext = createContext({
  state: {},
  onOpen: (type, message) => {},
  onClose: () => {},
});

const initialState = {
  isOpen: false,
  // Type can be either "success" or "error"
  type: "success",
  // Message to be displayed, can be any string
  message: "",
};

export function AlertProvider({ children }) {
  const [state, setState] = useState(initialState);

  const openHandler = (type, message) =>
    setState({ isOpen: true, type, message });

  const closeHandler = () => setState({ isOpen: false, type: "", message: "" });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: openHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export const useAlertContext = () => useContext(AlertContext);
