import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context";

export default function Skills() {
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
      <h1>Skills</h1>

      {/* register your input into the hook by invoking the "register" function */}
      <input
        className=""
        placeholder="Please Enter the technologies "
        {...register("technology", { required: true })}
      />
      {errors.technology && <span>technology field can't be empty</span>}

      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
      <input type="submit" />
    </form>
  );
}
