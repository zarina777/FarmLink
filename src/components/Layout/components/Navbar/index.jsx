import React from "react";
import Container from "../../../Container/Container";
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
          <button className={cn.singup}>
            <a href="singup">Sing up</a>
          </button>
          <button className={cn.singup}>
            <a href="singup">Log in</a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
