// context/ScrollContext.tsx
import React, { createContext, useRef, useContext, ReactNode } from "react";

interface ScrollContextType {
  elementRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  return (
    <ScrollContext.Provider value={{ elementRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
