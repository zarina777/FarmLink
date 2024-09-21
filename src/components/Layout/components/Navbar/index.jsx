import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Container";
import Navs from "./components/Navs";
import cn from "./style.module.scss";
const Navbar = () => {
  return (
    <div className={cn.Navbar}>
      <Container className={cn.Container}>
        <Navs />
        <a className={cn.logo} href="/">
          FarmLink
        </a>
        <div className={cn.controls}>
          <span>
            <i className="fa-solid fa-gear"></i>
          </span>
          <span>
            <i className="fa-solid fa-moon"></i>
          </span>
          <Link className={cn.singup} to="auth/signup">
            Sing up
          </Link>

          <Link className={cn.singup} to="auth/login">
            Log in
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
