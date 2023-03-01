import { updaterecordc } from "../functions/databoardfunctions";
import { useForm } from "react-hook-form";
import { useDataboard } from "../contexts/Databoard";
import { useState } from "react";

export function Editmodalc() {
  const { databoarddispatch, databoardstate } = useDataboard();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      weight: JSON.stringify(databoardstate.updationrecordc.weight),
      distance: JSON.stringify(databoardstate.updationrecordc.distance),
      travelBy: databoardstate.updationrecordc.travelBy,
      factorType: JSON.stringify(databoardstate.updationrecordc.factorType),
      date: databoardstate.updationrecordc.date.slice(0, 16),
      _id: databoardstate.updationrecordc._id,
    },
  });
  const [travelbydata, setTravelbydata] = useState(
    databoardstate.updationrecordc.travelBy
  );
  const onSubmit = async (data) => {
    databoarddispatch({ type: "HIDE_UPDATE_MODALC" });
    // console.log("---*---");
    // console.log(data);
    // console.log("---*---");
    const monthval = new Date(data.date);
    // console.log({ ...data, month: JSON.stringify(monthval.getMonth()) });
    const res = await updaterecordc({
      ...data,
      month: JSON.stringify(monthval.getMonth()),
    });
    if (res.success) {
      // console.log("data updated");
      // console.log({
      //   ...res.record,
      //   weight: Number(res.record.weight),
      //   distance: Number(res.record.distance),
      //   factorType: Number(res.record.factorType),
      // });
      databoarddispatch({
        type: "UPDATE_REORDC",
        payload: {
          updatedrecordc: {
            ...res.record,
            weight: Number(res.record.weight),
            distance: Number(res.record.distance),
            factorType: Number(res.record.factorType),
          },
        },
      });
    } else {
      // console.log("data not updated");
    }
  };
  // console.log(typeof databoardstate.updationrecordc.factorType);
  // console.log([...databoardstate.allfactors[travelbydata]]);
  // console.log(databoardstate.updationrecordc._id);
  return (
    <div className="dialog__overlay">
      <div className="dialog">
        <h1 className="dialog__header">
          Update Emission
          {/* {JSON.stringify([...databoardstate.allfactors[travelbydata]])} */}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="dialog__form">
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                type="number"
                min="1"
                placeholder="weight"
                className="dialog__input"
                required={true}
                {...register("weight")}
              />
            </div>
          </div>
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                type="number"
                placeholder="distance"
                min="1"
                className="dialog__input"
                required={true}
                {...register("distance")}
              />
            </div>
          </div>
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <select
                {...register("travelBy")}
                className="dialog__inputslect"
                required={true}
                onChange={(eve) => setTravelbydata(eve.target.value)}
              >
                <option value="">--Travel by--</option>
                {[...databoardstate.factorarrc].map((tby, idx) => (
                  <option key={idx + 1} value={tby}>
                    {tby}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <select
                {...register("factorType")}
                className="dialog__inputslect"
                required={true}
              >
                <option value="">--Factor--</option>
                {[...databoardstate.allfactorsc[travelbydata]].map((facto) => (
                  <option key={JSON.stringify(facto)} value={facto.id}>
                    {facto.factor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                className="dialog__inputdate"
                type="datetime-local"
                {...register("date")}
                required={true}
              />
            </div>
          </div>
          <button type="submit" className="dialog__btn">
            Update
          </button>
        </form>
        <button
          onClick={() => databoarddispatch({ type: "HIDE_UPDATE_MODALC" })}
          className="dialog__btn"
        >
          Discard
        </button>
      </div>
    </div>
  );
}
