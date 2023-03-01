import React from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";

const Regiscontext = createContext();
export function Registrationprov({ children }) {
  const olp = 4;
  function regisreducer(state, action) {
    switch (action.type) {
      case "SETMAIL":
        return { ...state, mail: action.payload.mail };
      case "SETCMAIL":
        return { ...state, cmail: action.payload.cmail };
      case "SETPWORD":
        return { ...state, pword: action.payload.pword };
      case "SETCPWORD":
        return { ...state, cpword: action.payload.cpword };
      default:
        throw new Error();
    }
  }
  const [regisstate, regisdispatch] = useReducer(regisreducer, {
    mail: "",
    cmail: "",
    pword: "",
    cpword: "",
  });
  return (
    <Regiscontext.Provider value={{ olp, regisstate, regisdispatch }}>
      {children}
    </Regiscontext.Provider>
  );
}
export const useRegis = () => useContext(Regiscontext);
