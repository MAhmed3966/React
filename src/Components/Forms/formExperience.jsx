import { useForm } from "react-hook-form";

export default function Experience() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <h1>Experience</h1>

      {/* register your input into the hook by invoking the "register" function */}
      <input  
       className=""  placeholder="Please Enter Name " 
      {...register('firstName',{required:true, maxLength:20})} 
       />

      {/* include validation with required or other standard HTML validation rules */}
      <input 
      type="password"
      {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.firstName && <span>Please write proper first name</span>}
      <input type="submit" />
    </form>
  );
}
