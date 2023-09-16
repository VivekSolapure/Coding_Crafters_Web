// File1.js

import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  const [myLocalVariable, setMyLocalVariable] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ myLocalVariable, setMyLocalVariable }}>
      {children}
    </MyContext.Provider>
  );
}
export {MyContext}