import { useNavigate } from "react-router-dom";
import menuicon from "../../assets/dashboard-icon.svg";
import kio from "../../assets/sidenav/travel.png";
import electricity from "../../assets/sidenav/electricity.svg";
import cargo from "../../assets/sidenav/cargo.svg";
import trash from "../../assets/sidenav/trshbtn.svg";
import "../../styles/sidebar/sidebarv2.css";
import datain from "../../assets/homenav/datain.svg";
import automate from "../../assets/homenav/automate.svg";
import reports from "../../assets/homenav/reports.svg";
import visualize from "../../assets/homenav/visualize.svg";
import { useNavc } from "../../contexts/Navcontext";
import { useState } from "react";
export function Sidenavv2() {
  const navigate = useNavigate();
  const [state, setState] = useState([
    {
      id: 1,
      name: "Datainboard",
      isopen: false,
      img: datain,
      path: "databoard",
      canopen: true,
    },
    { id: 2, name: "Automate", isopen: false, img: automate, canopen: false },
    {
      id: 3,
      name: "Visualize",
      isopen: false,
      img: visualize,
      path: "visualize",
      canopen: true,
    },
    {
      id: 4,
      name: "Report",
      isopen: false,
      img: reports,
      canopen: false,
      isreport: true,
      reportsubnav: [
        {
          id: 1,
          name: "BRSR",
          img: reports,
        },
      ],
    },
  ]);
  function handlenavdop(navaray, id) {
    const newnavarray = [...navaray].map((item) => {
      if (item.id === id) {
        return { ...item, isopen: !item.isopen };
      }
      return item;
    });

    setState(newnavarray);
  }
  return (
    <div className="sidenavv2">
      <div className="sidenavv2__logo">
        <div onClick={() => navigate("/")} className="sidenavv2__logocont">
          <img
            className="sidenavv2__logoimg"
            src="https://pbs.twimg.com/profile_images/1416084338467241985/cEghLfOF_400x400.jpg"
            alt="sideimage"
          />
        </div>
        <p className="sidenavv2__logopara">E-bike go</p>
      </div>
      <div className="sidenavv2__homemenu">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="sidenavv2__homemenucont"
        >
          <img
            className="sidenavv2__homemenuimg"
            src={menuicon}
            alt="menuicon"
          />
        </div>
      </div>
      <div className="sidenavv2__navigate">
        {[...state].map((itm) => {
          return (
            <div
              key={itm.id}
              onClick={() => handlenavdop(state, itm.id)}
              className="sidenavv2__navigateitm"
            >
              <div className="sidenavv2__navigateitmdd">
                <div className="sidenavv2__navigateitmlogo">
                  <img
                    className="sidenavv2__navigateitmimg"
                    src={itm.img}
                    alt="doctor"
                  />
                </div>
                <p className="sidenavv2__navigateitmddmsg">{itm.name}</p>
              </div>
              <div className="sidenavv2__navigatedd">
                {itm.isopen && itm.canopen && <Subnav2 slashnav={itm.path} />}
                {itm.reportsubnav && itm.isopen && (
                  <Subnav2report slashnav="report" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Subnav2(params) {
  const { slashnav } = params;
  const navigate = useNavigate();
  const { navdispatch } = useNavc();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${slashnav}`);
          navdispatch({ type: "SET_NAVSTATE", payload: { navnum: 1 } });
        }}
        className="sidenavv2__dditm"
      >
        <div className="sidenavv2__dditmlogo">
          <img className="sidenavv2__dditmimg" src={kio} alt="doctor" />
        </div>
        <p className="sidenavv2__dditmmsg">Travel</p>
      </div>
      <div
        onClick={() => {
          navigate(`/${slashnav}`);
          navdispatch({ type: "SET_NAVSTATE", payload: { navnum: 2 } });
        }}
        className="sidenavv2__dditm"
      >
        <div className="sidenavv2__dditmlogo">
          <img
            className="sidenavv2__dditmimg"
            src={electricity}
            alt="electricity"
          />
        </div>
        <p className="sidenavv2__dditmmsg">Electricity</p>
      </div>
      <div
        onClick={() => {
          navigate(`/${slashnav}`);
          navdispatch({ type: "SET_NAVSTATE", payload: { navnum: 3 } });
        }}
        className="sidenavv2__dditm"
      >
        <div className="sidenavv2__dditmlogo">
          <img className="sidenavv2__dditmimg" src={cargo} alt="cargo" />
        </div>
        <p className="sidenavv2__dditmmsg">Cargo</p>
      </div>
      <div
        onClick={() => {
          navigate(`/${slashnav}`);
          navdispatch({ type: "SET_NAVSTATE", payload: { navnum: 4 } });
        }}
        className="sidenavv2__dditm"
      >
        <div className="sidenavv2__dditmlogo">
          <img className="sidenavv2__dditmimg" src={trash} alt="E-waste" />
        </div>
        <p className="sidenavv2__dditmmsg">E-waste</p>
      </div>
    </>
  );
}

function Subnav2report(params) {
  const { slashnav } = params;
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${slashnav}`);
          // navdispatch({ type: "SET_NAVSTATE", payload: { navnum: 1 } });
        }}
        className="sidenavv2__dditm"
      >
        <div className="sidenavv2__dditmlogo">
          <img className="sidenavv2__dditmimg" src={kio} alt="doctor" />
        </div>
        <p className="sidenavv2__dditmmsg">BRSR</p>
      </div>
    </>
  );
}
