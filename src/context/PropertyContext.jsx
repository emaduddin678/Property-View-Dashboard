import React, { createContext, useContext, useState } from "react";
import properties from "./../../data.js";

const PropertyContext = createContext();

export const usePropertyContext = () => {
  return useContext(PropertyContext);
};

const PropertyContextProvider = ({ children }) => {
  const [allProperties, setAllProperties] = useState(properties);
 
  const value = {
    allProperties,
  };
  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
