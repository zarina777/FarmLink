import clsx from "clsx";
import { useContext } from "react";
import { ContextCategory } from "../context";
import cn from "./style.module.scss";

const Category = ({ name, onClick }) => {
  const { categoryOn, resourceOn } = useContext(ContextCategory);
  return (
    <button
      onClick={onClick}
      className={clsx(
        cn.Category,
        categoryOn == name.toLowerCase() ? cn.on : "",
        resourceOn == name.toLowerCase() ? cn.on : ""
      )}
    >
      {name}
    </button>
  );
};

export default Category;
