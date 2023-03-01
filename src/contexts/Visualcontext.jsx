// Visualcontext

import React, { useReducer, useState } from 'react';
import { createContext, useContext } from 'react';

const Visualcontext = createContext();
export function Visualsprov({ children }) {
  const [enabledc, setEnabledc] = useState(true);
  function visualreducer(state, action) {
    switch (action.type) {
      case 'SET_VISUALS':
        return {
          ...state,
          travel: action.payload.travelviz,
          cargo: action.payload.cargoviz,
          electricty: action.payload.electriviz,
          fuel: action.payload.fuelviz,
          scope1: action.payload.scope1viz,
          scope2: action.payload.scope2viz,
          scope3: action.payload.scope3viz,
          total: action.payload.toatalviz,
        };
      case 'SET_DASHTOTALS':
        return {
          ...state,
          totalElectricityUsage: action.payload.totalElectricityUsage,
          totalDistanceTravelled: action.payload.totalDistanceTravelled,
          totalFuelScope: action.payload.totalFuelScope,
        };
      default:
        throw new Error();
    }
  }
  const [visualstate, visualdispatch] = useReducer(visualreducer, {
    travel: {},
    cargo: {},
    electricty: {},
    fuel: {},
    scope1: 0,
    scope2: 0,
    scope3: 0,
    total: 0,
    totalDistanceTravelled: 0,
    totalElectricityUsage: 0,
    totalFuelScope: 0,
  });
  // const todaydate = new Date();
  // 2022-08-28 JSON.stringify(todaydate).slice(1, 11)
  const [dateval, setDateval] = useState('2022-01-01');
  const [enddateval, setEnddateval] = useState('2023-02-15');

  return (
    <Visualcontext.Provider
      value={{
        visualstate,
        visualdispatch,
        dateval,
        setDateval,
        enddateval,
        setEnddateval,
        enabledc,
        setEnabledc,
      }}
    >
      {children}
    </Visualcontext.Provider>
  );
}
export const useVisuals = () => useContext(Visualcontext);
