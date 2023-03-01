import { useState } from "react";
import { useDataboard } from "../contexts/Databoard";
import { Addmodal } from "./Addmodal";
import { Editmodal } from "./Editmodal";

export function Databottom() {
  const [modalstatus, setModalstatus] = useState(false);
  const { databoardstate } = useDataboard();
  // databoardstate.databoardtableloading
  return (
    <>
      {!databoardstate.databoardtableloading && (
        <div className="databoardmainbottom">
          <p className="databoardmainbottom__rowmessage">
            {databoardstate.databoardtable.length} results found
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
      {modalstatus && <Addmodal setModalstatus={setModalstatus} />}
      {databoardstate.updatemodalstatus && <Editmodal />}
    </>
  );
}
