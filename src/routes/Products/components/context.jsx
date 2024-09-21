import { createContext, useState } from "react";

const ContextCategory = createContext();
function ContextProvide({ children }) {
  const [categoryOn, setCategoryOn] = useState("all");

  return (
    <ContextCategory.Provider
      value={{ categoryOn, setCategoryOn }}
    >
      {children}
    </ContextCategory.Provider>
  );
}

export { ContextCategory, ContextProvide };
