import menuicon from "../assets/dashboard-icon.svg";
import kio from "../assets/homenav/reports.svg";
import { Link } from "react-router-dom";
export function Reportnav() {
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <Link to="/" className="sidenav__logocont">
          <img
            className="sidenav__logoimg"
            src="https://pbs.twimg.com/profile_images/1416084338467241985/cEghLfOF_400x400.jpg"
            alt="sideimage"
          />
        </Link>
        <p className="sidenav__logopara">E-bike go</p>
      </div>
      <div className="sidenav__homemenu">
        <div className="sidenav__homemenucont">
          <img className="sidenav__homemenuimg" src={menuicon} alt="menuicon" />
        </div>
      </div>
      <div className="sidenav__navigate">
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img className="sidenav__navigateitmimg" src={kio} alt="doctor" />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img className="sidenav__navigateitmimg" src={kio} alt="doctor" />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">Report</p>
          </div>
        </div>
      </div>
    </div>
  );
}
