import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDataboard } from "../contexts/Databoard";
import { postrecordc } from "../functions/databoardfunctions";

export function Addmodalc(params) {
  const { databoardstate, databoarddispatch } = useDataboard();
  const { setModalstatus } = params;
  const [travelbydata, setTravelbydata] = useState("");
  const onSubmit = async (data) => {
    setModalstatus(false);
    // console.log("siu");
    // console.log(data);
    const monthval = new Date(data.date);
    // console.log({ ...data, month: JSON.stringify(monthval.getMonth()) });
    const res = await postrecordc({
      ...data,
      month: JSON.stringify(monthval.getMonth()),
    });
    if (res.success) {
      // console.log("data sent");
      // console.log({
      //   ...res.record,
      //   weight: Number(res.record.weight),
      //   distance: Number(res.record.distance),
      //   factorType: Number(res.record.factorType),
      // });
      databoarddispatch({
        type: "ADD_REORDC",
        payload: {
          newrecordc: {
            ...res.record,
            weight: Number(res.record.weight),
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
