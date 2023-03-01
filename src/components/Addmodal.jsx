import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDataboard } from "../contexts/Databoard";
import { postrecord } from "../functions/databoardfunctions";

export function Addmodal(params) {
  const { databoardstate, databoarddispatch } = useDataboard();
  const { setModalstatus } = params;
  const [travelbydata, setTravelbydata] = useState("");
  const onSubmit = async (data) => {
    setModalstatus(false);
    const monthval = new Date(data.date);
    // console.log({ ...data, month: JSON.stringify(monthval.getMonth()) });
    const res = await postrecord({
      ...data,
      month: JSON.stringify(monthval.getMonth()),
    });
    if (res.success) {
      // console.log("data sent");
      // console.log({
      //   ...res.record,
      //   passengers: Number(res.record.passengers),
      //   distance: Number(res.record.distance),
      //   factorType: Number(res.record.factorType),
      // });
      /**
 * 
 * console.table( {
          ...response.data,
          passengers: Number(response.data.passengers),
          distance: Number(response.data.distance),
          factorType: Number(response.data.factorType),
        } );
*/
      databoarddispatch({
        type: "ADD_REORD",
        payload: {
          newrecord: {
            ...res.record,
            passengers: Number(res.record.passengers),
            distance: Number(res.record.distance),
            factorType: Number(res.record.factorType),
          },
        },
      });
    } else {
      // console.log("data not sent");
    }
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
    <div className="dialog__overlay">
      <div className="dialog">
        <h1 className="dialog__header">Insert Emission</h1>
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
            Insert
          </button>
        </form>
        <button onClick={() => setModalstatus(false)} className="dialog__btn">
          Discard
        </button>
      </div>
    </div>
  );
}
