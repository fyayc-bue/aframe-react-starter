import React, { useReducer, createContext } from "react";
import * as uniqid from 'uniqid';

const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case "selectLayer":
      return { ...state, activeLayer: action.layerName }
    case "addEntity":
      // Alter layer model
      const activeLayerInstance = state.layers.find(layer => layer.name === state.activeLayer);
      

      // Wrap entity into layerEntity, that has placement and custom properties
      const layerEntity = {
        id: uniqid.time(),
        type: action.entity.type,
        itemRef: action.entity, // reference
        position: '0 0 0',
        scale: '1 1 1',
        titel: action.entity.titel, // default titel
        description: '',
        style: '',
        connections: {
          inputs: [],
          outputs: [],
        },
        children: [], 
      };

      console.log('added entity to layer',layerEntity);

      // Add entity to layer instance
      activeLayerInstance.entities.push(layerEntity);
      return { ...state, layers: state.layers }
    default:
      return;
  }
};

const initialState = {
  counter: 10,
  enlarge: "1.0",
  activeLayer: 'customers',
  customersLayer: false,
  layers: [
    {
      name: 'customers',
      entities: [],
    },
    {
      name: 'experience',
      entities: [],
    },
    {
      name: 'organisation',
      entities: [],
    },
    {
      name: 'performance',
      entities: [],
    },
    {
      name: 'asset',
      entities: [],
    },
    {
      name: 'data',
      entities: [],
    },
  ],
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
