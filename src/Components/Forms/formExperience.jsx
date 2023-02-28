import { useForm } from "react-hook-form";
import { AppContext } from "../../context";
import { useContext } from "react";

export default function Experience() {
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
      <h1>Experience</h1>

      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="text"
        placeholder="Please Enter The firm name"
        {...register("firmName", { required: true })}
      />
      {errors.firmName && <span>Firm Name can't be empty</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        type="text"
        placeholder="Enter Experience in years"
        {...register("experience", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.experience && <span>Experience can't be empty</span>}

      <input type="submit" />
    </form>
  );
}
