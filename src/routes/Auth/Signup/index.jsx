import Select from "react-select";
import cn from "./style.module.scss";

const Signup = () => {
  const options = [
    { value: "customer", label: "Customer" },
    { value: "farmer", label: "Farmer" },
    { value: "admin", label: "Admin" },
  ];
  return (
    <form className={cn.Signup}>
      <h2>Sign up</h2>

      <p>
        <h3>Choose the type of your Account</h3>
        <Select className={cn.select} required options={options} />
      </p>
      <label>
        <h3>Your Username</h3>
        <input placeholder="Enter your username..." type="text" />
      </label>
      <label>
        <h3>Your Password</h3>
        <input placeholder="Enter your password..." type="password" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default Signup;
