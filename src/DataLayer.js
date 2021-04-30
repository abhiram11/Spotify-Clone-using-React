import React, { createContext, useContext, useReducer } from "react";
//read react documentation for the 3 above!

//This is like setting up/creating the data layer
export const DataLayerContext = createContext();

//                       input => result
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// to get value or give action to DATA Layer, we have to get access to the Data LAyer

export const useDataLayerValue = () => useContext(DataLayerContext);
