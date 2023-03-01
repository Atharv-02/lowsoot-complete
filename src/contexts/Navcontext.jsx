import React, { useReducer } from 'react';
import { createContext, useContext } from 'react';
// import automate from "../assets/sidenav/automate.svg";
import cargo from '../assets/sidenav/sidenavv3/mdi_truck-cargo-container.svg';
import datain from '../assets/sidenav/sidenavv3/mdi_truck-cargo-container.svg';
import electricity from '../assets/sidenav/sidenavv3/fluent_flash.svg';
import reports from '../assets/sidenav/reports.svg';
import travel from '../assets/sidenav/sidenavv3/ic_outline-card-travel.svg';
// import trshbtn from "../assets/sidenav/sidenavv3/ri_delete-bin-6-line.svg";
import reportoutline from '../assets/sidenav/sidenavv3/report_icon.svg';
import visualize from '../assets/sidenav/visualize.svg';
import fuel from '../assets/sidenav/fuel.svg';
import product from '../assets/sidenav/product.svg';
import building from '../assets/sidenav/building.svg';
const Navcontext = createContext();
export function Navprov({ children }) {
  function navreducer(state, action) {
    switch (action.type) {
      case 'SET_NAVSTATE':
        return { ...state, navnow: action.payload.navnum };
      case 'TOGGLE_NAVDD':
        const togglednavdd = [...state.subnav2].map((navitm) => {
          if (navitm.navid === action.payload.navid) {
            return { ...navitm, isopen: !navitm.isopen };
          }
          return navitm;
        });
        return { ...state, subnav2: togglednavdd };
      case 'SET_NAVBRAND':
        return {
          ...state,
          navimage: action.payload.navimage,
          navbrandname: action.payload.navbrandname,
        };
      case 'SELECT_NAVDD':
        const givennavid = action.payload.navid;
        const givensubnavid = action.payload.id;
        const selectednavstate = navselection(
          givennavid,
          givensubnavid,
          state.subnav2
        );
        return { ...state, subnav2: selectednavstate };
      case 'SELECT_HOME':
        const guy = [...state.subnav2].map((item) => {
          const kiki = [...item.subnavarr].map((itm) => {
            return { ...itm, isSlected: false };
          });
          return { ...item, subnavarr: kiki };
        });
        return { ...state, subnav2: guy };
      default:
        throw new Error();
    }
  }
  const [navboardstate, navdispatch] = useReducer(navreducer, {
    navnow: 1,
    subnav2: [
      {
        navid: 1,
        name: 'Data in board',
        isopen: true,
        img: datain,
        path: 'databoard',
        route: 'datainboard',
        canopen: true,
        subnavarr: [
          {
            id: 1,
            imgicon: travel,
            name: 'Commute',
            subroute: 'commute',
            navnum: 1,
            isSlected: false,
          },
          {
            id: 2,
            imgicon: electricity,
            name: 'Electricity',
            subroute: 'electricity',
            navnum: 2,
            isSlected: false,
          },
          {
            id: 3,
            imgicon: cargo,
            name: 'Cargo',
            subroute: 'cargo',
            navnum: 3,
            isSlected: false,
          },
          {
            id: 4,
            imgicon: building,
            name: 'Building',
            subroute: 'Building',
            navnum: 4,
            isSlected: false,
          },
          {
            id: 5,
            imgicon: cargo,
            name: 'Delivery',
            subroute: 'delivery',
            navnum: 5,
            isSlected: false,
          },
          {
            id: 6,
            imgicon: fuel,
            name: 'Fuel',
            subroute: 'fuel',
            navnum: 6,
            isSlected: false,
          },
          {
            id: 7,
            imgicon: product,
            name: 'Product',
            subroute: 'product',
            navnum: 7,
            isSlected: false,
          },
          {
            id: 8,
            imgicon: product,
            name: 'Carbon Neutral',
            subroute: 'carbon-neutral',
            navnum: 7,
            isSlected: false,
          },
        ],
      },
      {
        navid: 3,
        name: 'Visualize',
        isopen: true,
        img: visualize,
        path: 'visualize',
        route: 'visualization',
        canopen: true,
        subnavarr: [
          {
            id: 1,
            imgicon: travel,
            name: 'Commute',
            subroute: 'commute',
            navnum: 1,
            isSlected: false,
          },
          {
            id: 2,
            imgicon: electricity,
            name: 'Electricity',
            subroute: 'electricity',
            navnum: 2,
            isSlected: false,
          },
          {
            id: 3,
            imgicon: cargo,
            name: 'Cargo',
            subroute: 'cargo',
            navnum: 3,
            isSlected: false,
          },
          {
            id: 4,
            imgicon: building,
            name: 'Building',
            subroute: 'Building',
            navnum: 4,
            isSlected: false,
          },
          {
            id: 5,
            imgicon: cargo,
            name: 'Delivery',
            subroute: 'delivery',
            navnum: 5,
            isSlected: false,
          },
          {
            id: 6,
            imgicon: fuel,
            name: 'Fuel',
            subroute: 'fuel',
            navnum: 6,
            isSlected: false,
          },
          {
            id: 7,
            imgicon: product,
            name: 'Product',
            subroute: 'product',
            navnum: 7,
            isSlected: false,
          },
          {
            id: 8,
            imgicon: product,
            name: 'Carbon Neutral',
            subroute: 'carbon-neutral',
            navnum: 7,
            isSlected: false,
          },
        ],
      },
      {
        navid: 4,
        name: 'Report',
        isopen: true,
        img: reportoutline,
        path: 'report',
        route: 'report',
        canopen: true,
        isreport: false,
        reportsubnav: [
          {
            id: 1,
            name: 'BRSR',
            img: reports,
          },
        ],
        subnavarr: [
          {
            id: 1,
            imgicon: reportoutline,
            name: 'BRSR',
            subroute: 'brsr',
            navnum: 1,
            isSlected: false,
          },
        ],
      },
    ],
    navimage: '',
    navbrandname: '',
  });
  return (
    <Navcontext.Provider value={{ navboardstate, navdispatch }}>
      {children}
    </Navcontext.Provider>
  );
}
export const useNavc = () => useContext(Navcontext);

function navselection(givennavid, givensubnavid, array) {
  const selectednavstate = [...array].map((headnav) => {
    if (headnav.navid === givennavid) {
      const huik = [...headnav.subnavarr].map((subnavdd) => {
        if (subnavdd.id === givensubnavid) {
          return { ...subnavdd, isSlected: true };
        }
        return { ...subnavdd, isSlected: false };
      });
      return { ...headnav, subnavarr: huik };
    } else {
      const huikx = [...headnav.subnavarr].map((lio) => {
        return { ...lio, isSlected: false };
      });
      return { ...headnav, subnavarr: huikx };
    }
  });
  return selectednavstate;
}
