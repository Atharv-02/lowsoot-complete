import { useState } from "react";
import { useDataboard } from "../contexts/Databoard";
import { Addmodalc } from "./Addmodalc";
// import { Editmodal } from "./Editmodal";
import { Editmodalc } from "./Editmodalc";

export function Databottomc() {
  const [modalstatus, setModalstatus] = useState(false);
  const { databoardstate } = useDataboard();
  return (
    <>
      {!databoardstate.databoardtableloading && (
        <div className="databoardmainbottom">
          <p className="databoardmainbottom__rowmessage">
            {databoardstate.databoardtablec.length} results found
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
      {databoardstate.updatemodalstatus && <Editmodalc />}
      {modalstatus && <Addmodalc setModalstatus={setModalstatus} />}
    </>
  );
}
