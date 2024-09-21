import { useForm } from "react-hook-form";
import cn from "./style.module.scss";

const FormMessage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your API
    reset();
  };
  return (
    <div className={cn.FormMessage}>
      <h1>Any other question? Feel free to send us a message :)</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cn.contactForm}>
        <div className={cn.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: true })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: true })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <button type="submit" className={cn.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormMessage;
