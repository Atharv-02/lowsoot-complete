import React, { useReducer } from "react";
import { createContext, useContext } from "react";

const Databoardcontext = createContext();
export function Databoardprovider({ children }) {
  function databoardreducer(state, action) {
    switch (action.type) {
      case "SET_VALUES":
        return { ...state, databoardtable: action.payload.databoardarray };
      case "SET_VALUES_CARGO":
        return { ...state, databoardtablec: action.payload.databoardarrayc };
      case "SET_VALUES_ELEC":
        return { ...state, databoardtablee: action.payload.databoardarraye };
      case "SET_VALUES_FUEL":
        return { ...state, databoardtablef: action.payload.databoardarrayf };
      case "LOADER_ON":
        return {
          ...state,
          databoardtableloading: true,
        };
      case "LOADER_OFF":
        return {
          ...state,
          databoardtableloading: false,
        };
      case "SET_ALLFACTORS":
        return {
          ...state,
          allfactors: { ...action.payload.factorsobject, "": [] },
          factorarr: [...Object.keys(action.payload.factorsobject)],
        };
      case "SET_ALLFACTORSC":
        return {
          ...state,
          allfactorsc: { ...action.payload.factorsobjectc, "": [] },
          factorarrc: [...Object.keys(action.payload.factorsobjectc)],
        };
      case "SET_ALLFACTORSE":
        // console.log("ye kya hai");
        // console.log(action.payload.factorsobjecte);
        return {
          ...state,
          // allfactorse: { ...action.payload.factorsobjecte, "": [] },
          factorarre: [...action.payload.factorsobjecte],
        };
      case "ADD_REORD":
        return {
          ...state,
          databoardtable: [...state.databoardtable, action.payload.newrecord],
        };
      case "ADD_REORDC":
        return {
          ...state,
          databoardtablec: [
            ...state.databoardtablec,
            action.payload.newrecordc,
          ],
        };
      case "ADD_REORDE":
        return {
          ...state,
          databoardtablee: [
            ...state.databoardtablee,
            action.payload.newrecorde,
          ],
        };
      case "DELETE_REORD":
        return {
          ...state,
          databoardtable: [...state.databoardtable].filter(
            (item) => item._id !== action.payload.deletionid
          ),
        };
      case "DELETE_REORDC":
        return {
          ...state,
          databoardtablec: [...state.databoardtablec].filter(
            (item) => item._id !== action.payload.deletionid
          ),
        };
      case "DELETE_REORDE":
        return {
          ...state,
          databoardtablee: [...state.databoardtablee].filter(
            (item) => item._id !== action.payload.deletionid
          ),
        };

      case "UPDATE_REORD":
        return {
          ...state,
          databoardtable: [...state.databoardtable].map((itm) => {
            if (itm._id === action.payload.updatedrecord._id) {
              return action.payload.updatedrecord;
            }
            return itm;
          }),
        };
      case "UPDATE_REORDC":
        return {
          ...state,
          databoardtablec: [...state.databoardtablec].map((itm) => {
            if (itm._id === action.payload.updatedrecordc._id) {
              return action.payload.updatedrecordc;
            }
            return itm;
          }),
        };
      case "UPDATE_REORDE":
        return {
          ...state,
          databoardtablee: [...state.databoardtablee].map((itm) => {
            if (itm._id === action.payload.updatedrecorde._id) {
              return action.payload.updatedrecorde;
            }
            return itm;
          }),
        };
      case "SHOW_UPDATE_MODAL":
        return {
          ...state,
          updatemodalstatus: true,
          updationrecord: { ...action.payload.updationrecord },
        };
      case "SHOW_UPDATE_MODALC":
        return {
          ...state,
          updatemodalstatus: true,
          updationrecordc: { ...action.payload.updationrecordc },
        };
      case "SHOW_UPDATE_MODALE":
        return {
          ...state,
          updatemodalstatus: true,
          updationrecorde: { ...action.payload.updationrecorde },
        };
      case "HIDE_UPDATE_MODAL":
        return { ...state, updatemodalstatus: false, updationrecord: {} };
      case "HIDE_UPDATE_MODALC":
        return { ...state, updatemodalstatus: false, updationrecordc: {} };
      case "SHOW_SHEETS_MODAL":
        return { ...state, sheetsmodal: true };
      case "HIDE_SHEETS_MODAL":
        return { ...state, sheetsmodal: false };
      default:
        throw new Error();
    }
  }
  const [databoardstate, databoarddispatch] = useReducer(databoardreducer, {
    databoardtable: [],
    databoardtableloading: false,
    allfactors: { "": [] },
    factorarr: [],
    factorarrc: [],
    updatemodalstatus: false,
    updatemodalstatusc: false,
    updationrecord: {},
    updationrecordc: {},
    updationrecorde: {},
    databoardtablec: [],
    allfactorsc: { "": [] },
    factorarre: [],
    databoardtablee: [],
    databoardtablef: [],
    sheetsmodal: false,
  });
  return (
    <Databoardcontext.Provider value={{ databoardstate, databoarddispatch }}>
      {children}
    </Databoardcontext.Provider>
  );
}
export const useDataboard = () => useContext(Databoardcontext);
