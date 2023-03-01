import menuicon from "../assets/dashboard-icon.svg";
import { Link } from "react-router-dom";
import datain from "../assets/homenav/datain.svg";
import automate from "../assets/homenav/automate.svg";
import reports from "../assets/homenav/reports.svg";
import visualize from "../assets/homenav/visualize.svg";

export function Homesidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <div className="sidenav__logocont">
          <img
            className="sidenav__logoimg"
            src="https://pbs.twimg.com/profile_images/1416084338467241985/cEghLfOF_400x400.jpg"
            alt="sideimage"
          />
        </div>
        <p className="sidenav__logopara">E-bike go</p>
      </div>
      <div className="sidenav__homemenu">
        <div className="sidenav__homemenucont">
          <img className="sidenav__homemenuimg" src={menuicon} alt="menuicon" />
        </div>
      </div>
      <div className="sidenav__navigate">
        <Link to="/databoard" className="sideLink sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={datain}
              alt="Data-in"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={datain}
                alt="Data-in"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">Data-in</p>
          </div>
        </Link>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={automate}
              alt="Automate"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={automate}
                alt="Automate"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">Automate</p>
          </div>
        </div>
        <Link to="/visualize" className="sideLink sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={visualize}
              alt="Visualize"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={visualize}
                alt="Visualize"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">Visualize</p>
          </div>
        </Link>
        <Link to="/report" className="sideLink sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={reports}
              alt="Report"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={reports}
                alt="Report"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">Report</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
