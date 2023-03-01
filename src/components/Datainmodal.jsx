import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDataboard } from "../contexts/Databoard";

export function Datainmodal(params) {
  const { databoarddispatch } = useDataboard();
  const onSubmit = async (data) => {
    databoarddispatch({ type: "HIDE_SHEETS_MODAL" });
    try {
      console.log(data);
    } catch (error) {
      toast.error("Sheet integration error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
    <div className="dialog__overlay">
      <div className="dialog sheetsdialog">
        <h1 className="dialog__header sheetsdialog__header">Sheets Import</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="dialog__form">
          <div className="dialog__row sheetsdialog__input">
            <div className="dialog__inputcont">
              <input
                type="url"
                min="1"
                placeholder="sheets url"
                className="dialog__input"
                required={true}
                {...register("sheetsurl")}
              />
            </div>
          </div>
          <div className="dialog__row sheetsdialog__copy">
            <div className="dialog__copycont">
              <span
                style={{
                  textOverflow: "ellipsis",
                  maxWidth: "45rem",
                  // lineClamp: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
                className="dialog__copyconttext"
              >
                emissions-calculator@emissions-calculator-354206.iam.gserviceaccount.com
              </span>
              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "emissions-calculator@emissions-calculator-354206.iam.gserviceaccount.com"
                  )
                }
                className="dialog__copycontbtn"
              >
                copy
              </button>
            </div>
          </div>
          <div className="dialog__row sheetsdialog__instructions">
            <div className="sheets_instructions">
              <b className="sheets_instructionshead">Usage Instructions</b>
              <ul className="sheets_instructionlist">
                <li>Open the sheet url entered above.</li>
                <li>Click Share.</li>
                <li>Enter the email address.</li>
                <li>Provide us the editor access.</li>
              </ul>
            </div>
          </div>
          <div className="datainmodal__buttons">
            <button type="submit" className="dialog__btn">
              Import
            </button>
            <button
              type="button"
              onClick={() => databoarddispatch({ type: "HIDE_SHEETS_MODAL" })}
              className="dialog__btn--hide dialog__btn dialog__btn--hide"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
