import { Link, useNavigate } from "react-router-dom";
import { useNavc } from "../../contexts/Navcontext";
import menuicon from "../../assets/sidenav/dashboardicon.svg";
export function Sidenavvv2() {
  const { navboardstate } = useNavc();
  // console.log("running nav");
  return (
    <div className="sidenavv2">
      <div className="sidenavv2__logo">
        <div className="sidenavv2__logocont">
          <img
            className="sidenavv2__logoimg"
            src={navboardstate.navimage}
            alt="sideimage"
          />
        </div>
        <p className="sidenavv2__logopara">
          {navboardstate.navbrandname.length > 0
            ? navboardstate.navbrandname
            : "loading..."}
        </p>
      </div>
      <div className="sidenavv2__homemenu">
        <Link to="/" className="sidenavv2__homemenucont">
          <img
            className="sidenavv2__homemenuimg"
            src={menuicon}
            alt="menuicon"
          />
        </Link>
      </div>
      <div className="sidenavv2__navigate">
        {[...navboardstate.subnav2].map((itm) => {
          return (
            <div key={itm.navid} className="sidenavv2__navigateitm">
              <div
                // onClick={() =>
                //   navdispatch({
                //     type: "TOGGLE_NAVDD",
                //     payload: { navid: itm.navid },
                //   })
                // }
                className="sidenavv2__navigateitmdd"
              >
                <div
                  // onClick={() => console.log(itm)}
                  className="sidenavv2__navigateitmlogo"
                >
                  <img
                    className="sidenavv2__navigateitmimg"
                    src={itm.img}
                    alt="doctor"
                  />
                </div>
                <p className="sidenavv2__navigateitmddmsg">{itm.name}</p>
              </div>
              <div className="sidenavv2__navigatedd">
                {itm.isopen && itm.canopen && (
                  <Subnav2
                    slashnav={itm.path}
                    subnavarrayx={itm.subnavarr}
                    navid={itm.navid}
                  />
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
  const { slashnav, subnavarrayx, navid } = params;
  const { navdispatch } = useNavc();
  const navigate = useNavigate();
  return (
    <>
      {[...subnavarrayx].map((subnavitm) => {
        return (
          <div
            onClick={() => {
              //   console.log(slashnav, subnavitm.navnum);
              navigate(`/${slashnav}`);
              navdispatch({
                type: "SET_NAVSTATE",
                payload: { navnum: subnavitm.navnum },
              });
              navdispatch({
                type: "SELECT_NAVDD",
                payload: { navid, id: subnavitm.id },
              });
            }}
            key={subnavitm.id}
            className="sidenavv2__dditm"
          >
            <div className="sidenavv2__dditmlogo">
              <img
                className="sidenavv2__dditmimg"
                src={subnavitm.imgicon}
                alt="subnavitm"
              />
            </div>
            <p className="sidenavv2__dditmmsg">
              {subnavitm.name} {JSON.stringify(subnavitm.isSlected)}
            </p>
          </div>
        );
      })}
    </>
  );
}
