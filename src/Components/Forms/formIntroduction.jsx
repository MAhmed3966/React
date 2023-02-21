import { useForm} from "react-hook-form";
import {AppContext} from '../../context';
import { useContext } from 'react';



export default function Introduction() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const {value1, value2} = useContext(AppContext);
  const [activeStep,setState] = value1;
  const [formValidated, setFormValidated] = value2;

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit((data) => {
      data?setState(activeStep + 1):setState(activeStep)
    })}>
    <h1>Introduction</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <input  
       className=""  placeholder="Please Enter Name " 
      {...register('firstName',{required:true, maxLength:20})} 
       />
      {errors.firstName && <span>Please write proper first name</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input 
      type="password"
      {...register("exampleRequired", { required: true })} />
      {(errors.exampleRequired || errors.firstName)? alert("Please provide right credentials"):true}
      <button type="submit">Next</button>
    </form>
  );
}
