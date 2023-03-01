import { updaterecorde } from "../functions/databoardfunctions";
import { useForm } from "react-hook-form";
import { useDataboard } from "../contexts/Databoard";

export function Editmodale() {
  const { databoarddispatch, databoardstate } = useDataboard();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      energy: databoardstate.updationrecorde.energy,
      factorType: databoardstate.updationrecorde.factorType,
      date: databoardstate.updationrecorde.date.slice(0, 16),
      _id: databoardstate.updationrecorde._id,
    },
  });
  const onSubmit = async (data) => {
    databoarddispatch({ type: "HIDE_UPDATE_MODALC" });
    // console.log("---*---");
    // console.log(data);
    // console.log("---*---");
    const monthval = new Date(data.date);
    // console.log({ ...data, month: JSON.stringify(monthval.getMonth()) });
    const res = await updaterecorde({
      ...data,
      month: JSON.stringify(monthval.getMonth()),
    });
    if (res.success) {
      // console.log("data updated");
      // console.log({
      //   ...res.record,
      //   energy: Number(res.record.energy),
      //   factorType: Number(res.record.factorType),
      // });
      databoarddispatch({
        type: "UPDATE_REORDE",
        payload: {
          updatedrecorde: {
            ...res.record,
            energy: Number(res.record.energy),
            factorType: Number(res.record.factorType),
          },
        },
      });
    } else {
      // console.log("data not updated");
    }
  };
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
