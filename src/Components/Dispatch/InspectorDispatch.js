import React, { useReducer, createContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "selectCustomerLayer":
      return { ...state, enlarge: state.enlarge == "1.0" ? "1.2" : "1.0" };
    case "toggleCustomersLayer":
      return { ...state, customersLayer: !state.customersLayer };
    default:
      return;
  }
};

const initialState = { 
  counter: 10, 
  enlarge: "1.0", 
  customersLayer: false 
};

const InspectorDispatch = createContext(initialState);

const InspectorDispatchProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InspectorDispatch.Provider value={{ state, dispatch }}>
      {props.children}
    </InspectorDispatch.Provider>
  );
};

export { InspectorDispatch, InspectorDispatchProvider };
