import { useState } from "react";
import { useDataboard } from "../contexts/Databoard";
// import { Addmodalc } from "./Addmodalc";
import { Addmodale } from "./Addmodale";
// import { Editmodal } from "./Editmodal";
// import { Editmodalc } from "./Editmodalc";
import { Editmodale } from "./Editmodale";

export function Databottome() {
  const [modalstatus, setModalstatus] = useState(false);
  const { databoardstate } = useDataboard();
  return (
    <>
      {!databoardstate.databoardtableloading && (
        <div className="databoardmainbottom">
          <p className="databoardmainbottom__rowmessage">
            {databoardstate.databoardtablee.length} results found
          </p>
          {/* <div className="databoardmainbottom__controls">
          <button
            className="databoardmainbottom__addbtn"
            onClick={() => setModalstatus(true)}
          >
            Insert row
          </button>
        </div> */}
        </div>
      )}
      {/* {modalstatus && <Addmodal setModalstatus={setModalstatus} />} */}
      {/* {databoardstate.updatemodalstatus && <Editmodal />} */}
      {databoardstate.updatemodalstatus && <Editmodale />}
      {modalstatus && <Addmodale setModalstatus={setModalstatus} />}
    </>
  );
}
