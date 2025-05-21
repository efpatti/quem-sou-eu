// context/SlideContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface SlideContextProps {
  index: number;
  total: number;
  next: () => void;
  prev: () => void;
  setTotal: (total: number) => void;
}

const SlideContext = createContext<SlideContextProps | undefined>(undefined);

export const SlideProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);

  const next = useCallback(
    () => setIndex((prev) => (prev < total - 1 ? prev + 1 : prev)),
    [total]
  );

  const prev = useCallback(
    () => setIndex((prev) => (prev > 0 ? prev - 1 : prev)),
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <SlideContext.Provider value={{ index, total, next, prev, setTotal }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlide = () => {
  const context = useContext(SlideContext);
  if (!context) throw new Error("useSlide must be used within a SlideProvider");
  return context;
};
