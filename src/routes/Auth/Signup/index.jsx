import { useState } from "react";
import Select from "react-select";
import cn from "./style.module.scss";

const Signup = () => {
  const [accountType, setAccountType] = useState(null);
  const options = [
    { value: "customer", label: "Customer" },
    { value: "farmer", label: "Farmer" },
  ];
  const handleAccountTypeChange = (selectedOption) => {
    setAccountType(selectedOption?.value || null);
  };
  return (
    <form className={cn.Signup}>
      <h2>Sign Up</h2>
      <div className={cn.super_wrap}>
        <div className={cn.wrap}>
          <label>
            <h3>Type of your Account</h3>
            <Select
              className={cn.select}
              required
              options={options}
              onChange={handleAccountTypeChange}
            />
          </label>
          <label>
            <h3>Username</h3>
            <input placeholder="Enter your username..." type="text" required />
          </label>

          <label>
            <h3>Email</h3>
            <input placeholder="Enter your email..." type="email" required />
          </label>

          <label>
            <h3> Password</h3>
            <input
              placeholder="Enter your password..."
              type="password"
              required
            />
          </label>
        </div>
        {accountType === "farmer" && (
          <div className={cn.wrap}>
            <>
              <label>
                <h3>Phone number</h3>
                <input
                  placeholder="Enter your tel number..."
                  type="text"
                  required
                />
              </label>
              <label>
                <h3>Passport ID</h3>
                <input
                  placeholder="Enter your passport ID..."
                  type="text"
                  required
                />
              </label>

              <label>
                <h3>Type of Products</h3>
                <input
                  placeholder="What products do you sell?"
                  type="text"
                  required
                />
              </label>
            </>
          </div>
        )}
      </div>

      {/* Change button text based on selected account type */}
      <button type="submit">
        {accountType === "farmer" ? "Apply" : "Submit"}
      </button>
    </form>
  );
};

export default Signup;
