import { useState, createContext, useEffect, ReactNode, FC } from "react";


export interface WebContextProps{
    isMobile: boolean;
}
const WebContext = createContext<WebContextProps | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
  }

export const ContextProvider: FC<ContextProviderProps> = ({children}) => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkIfMobile = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      setIsMobile(mediaQuery.matches);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const webContextValue = {
    isMobile
  };

  return <WebContext.Provider value={webContextValue}>
    {children}
  </WebContext.Provider>;
};

export{WebContext}