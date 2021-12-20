import React, { createContext, useContext, useReducer } from "react";

// Data Layer Banata Hai
export const StateContext  = createContext();

// Data Layer ko Provide Krne Wala Data
export const StateProvider = ({ reducer, initialState, children }) => (  
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
         { children }
    </StateContext.Provider>
);

// DataLayer se Bhejra hai jo
export const useStateValue = () => useContext(StateContext);