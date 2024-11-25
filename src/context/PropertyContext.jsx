import React, { createContext, useContext, useEffect, useState } from "react";
import properties from "./../../data.js";

const PropertyContext = createContext();

export const usePropertyContext = () => {
  return useContext(PropertyContext);
};

const PropertyContextProvider = ({ children }) => {
  const [allProperties, setAllProperties] = useState([]);

  // Effect hook to load the data when the component mounts
  useEffect(() => {
    const storedProperties = localStorage.getItem("allProperties");

    // If data exists in localStorage, use it
    if (storedProperties) {
      console.log("get data form local");
      setAllProperties(JSON.parse(storedProperties));
    } else {
      console.log("get data form data.js");

      // Otherwise, use the default data and store it in localStorage
      setAllProperties(properties);
      localStorage.setItem("allProperties", JSON.stringify(properties));
    }
    // Listen for the custom event
    window.addEventListener(
      "allProperties",
      setAllProperties(JSON.parse(localStorage.getItem("allProperties")))
    );
  }, []);
  const value = {
    allProperties,
    setAllProperties,
  };
  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
