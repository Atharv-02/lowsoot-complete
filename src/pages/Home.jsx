// import { Topbar } from "../components/Topbar";
import { Databoardcontols } from "../components/Databoardcontols";
import { Databoardtable } from "../components/Databoardtable";
import { Databottom } from "../components/Databottom";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Sidenavv3 } from "../components/sidenav/Sidenavv3";
// import { Homesidenav } from "../components/Homesidenav";
// import { Sidenavv2 } from "../components/sidenav/Sidenavv2";
// import { Sidenavvv2 } from "../components/sidenav/Sidenavvv2";
import { Topbarv2 } from "../components/topbar/Topbarv2";
export function Home() {
  return (
    <div className="dcontainer">
      {/* <Homesidenav /> */}
      {/* <Sidenavv2 /> */}
      {/* <Sidenavvv2 /> */}
      <Sidenavv3 />
      <div className="datamain">
        {/* <Topbar /> */}
        <Topbarv2 />
        <div className="databoardmaincontent">
          <h1 className="databoardheader">Data-in Board</h1>
          <div className="databoardtablecont">
            <div className="databoardtabletop">
              <h2 className="databoardtabletop__header">Travel</h2>
              <div className="databoardtabletop__controls">
                <Databoardcontols />
              </div>
            </div>
            <div className="databoardtable">
              <Databoardtable />
            </div>
            <Databottom />
          </div>
        </div>
        <Lowsootfooter />
      </div>
    </div>
  );
}
