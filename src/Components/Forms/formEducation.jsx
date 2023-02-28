import { useForm } from "react-hook-form";
import { AppContext } from "../../context";
import { useContext } from "react";

export default function Education() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { value1, value2, value3 } = useContext(AppContext);
  const [activeStep, setState] = value1;
  const [formValidated, setFormValidated] = value2;
  const [formData, setFormData] = value3;
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (data) {
          setState(activeStep + 1);
          setFormData(formData.concat(data));
        } else {
          setState(activeStep);
        }
      })}
    >
      <h1>Education</h1>

      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="text"
        className=""
        placeholder="Please Enter Maximum Education "
        {...register("education", { required: true })}
      />
      {errors.education && <span>Education can be empty</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input type="text" {...register("institute", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.institute && <span>institute can't be empty</span>}
      <input type="submit" />
    </form>
  );
}
