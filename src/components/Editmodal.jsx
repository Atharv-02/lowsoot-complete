import { updaterecord } from "../functions/databoardfunctions";
import { useForm } from "react-hook-form";
import { useDataboard } from "../contexts/Databoard";
import { useState } from "react";

export function Editmodal() {
  const { databoarddispatch, databoardstate } = useDataboard();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      passengers: JSON.stringify(databoardstate.updationrecord.passengers),
      distance: JSON.stringify(databoardstate.updationrecord.distance),
      travelBy: databoardstate.updationrecord.travelBy,
      factorType: JSON.stringify(databoardstate.updationrecord.factorType),
      date: databoardstate.updationrecord.date.slice(0, 16),
      _id: databoardstate.updationrecord._id,
    },
  });
  const [travelbydata, setTravelbydata] = useState(
    databoardstate.updationrecord.travelBy
  );
  const onSubmit = async (data) => {
    databoarddispatch({ type: "HIDE_UPDATE_MODAL" });
    // console.log(data);
    const monthval = new Date(data.date);
    // console.log({ ...data, month: JSON.stringify(monthval.getMonth()) });
    const res = await updaterecord({
      ...data,
      month: JSON.stringify(monthval.getMonth()),
    });
    if (res.success) {
      // console.log("data updated");
      // console.log({
      //   ...res.record,
      //   passengers: Number(res.record.passengers),
      //   distance: Number(res.record.distance),
      //   factorType: Number(res.record.factorType),
      // });
      databoarddispatch({
        type: "UPDATE_REORD",
        payload: {
          updatedrecord: {
            ...res.record,
            passengers: Number(res.record.passengers),
            distance: Number(res.record.distance),
            factorType: Number(res.record.factorType),
          },
        },
      });
    } else {
      // console.log("data not updated");
    }
    // console.log(data);
  };
  // console.log(typeof databoardstate.updationrecord.factorType);
  // console.log([...databoardstate.allfactors[travelbydata]]);
  // console.log(databoardstate.updationrecord._id);
  return (
    <div className="dialog__overlay">
      <div className="dialog">
        <h1 className="dialog__header">Update Emission</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="dialog__form">
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                type="number"
                min="1"
                placeholder="passengers"
                className="dialog__input"
                required={true}
                {...register("passengers")}
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
                {[...databoardstate.factorarr].map((tby, idx) => (
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
                {[...databoardstate.allfactors[travelbydata]].map((facto) => (
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
          onClick={() => databoarddispatch({ type: "HIDE_UPDATE_MODAL" })}
          className="dialog__btn"
        >
          Discard
        </button>
      </div>
    </div>
  );
}
