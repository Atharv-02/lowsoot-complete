import { useForm } from "react-hook-form";
import { useDataboard } from "../contexts/Databoard";
import { postrecorde } from "../functions/databoardfunctions";

export function Addmodale(params) {
  const { databoardstate, databoarddispatch } = useDataboard();
  const { setModalstatus } = params;
  const onSubmit = async (data) => {
    // console.log(data);
    setModalstatus(false);
    const monthval = new Date(data.date);
    // console.log({ ...data, month: JSON.stringify(monthval.getMonth()) });
    const res = await postrecorde({
      ...data,
      month: JSON.stringify(monthval.getMonth()),
    });
    // console.log("------postres-------");
    // console.log(res.record);
    if (res.success) {
      // console.log("data sent");
      // console.log({
      //   ...res.record,
      //   energy: Number(res.record.energy),
      //   factorType: Number(res.record.factorType),
      // });
      databoarddispatch({
        type: "ADD_REORDE",
        payload: {
          newrecorde: {
            ...res.record,
            energy: Number(res.record.energy),
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
        <h1 className="dialog__header">Insertq Emission</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="dialog__form">
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                type="number"
                min="1"
                placeholder="energy"
                className="dialog__input"
                required={true}
                {...register("energy")}
              />
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
                {[...databoardstate.factorarre].map((facto) => (
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
