import { useContext } from "react";
import { WebContext, WebContextProps } from "./../provider/ContextProvider";

export const useWebContext = (): WebContextProps => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a ContextProvider");
  }
  return context;
};
