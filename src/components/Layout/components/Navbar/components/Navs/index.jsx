import { NavLink } from "react-router-dom";
import cn from "./style.module.scss";

const Navs = () => {
  return (
    <ul className={cn.Navs}>
      <li>
        <NavLink activeClassName="active" to="/">
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navs;
