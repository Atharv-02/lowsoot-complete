import { Field } from "formik";
export function Selecter(props) {
  const { name, options } = props;
  return (
    <>
      <Field
        className="sigin__input sigin__inputdemo"
        as="select"
        id={name}
        name={name}
      >
        {options.map((option, idx) => {
          return (
            <option key={idx} value={option.code}>
              {option.countryname}
            </option>
          );
        })}
      </Field>
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </>
  );
}
