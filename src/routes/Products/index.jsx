import { useContext } from "react";
import CardOfMentor from "./components/Card";
import Category from "./components/Categories";
import { ContextCategory } from "./components/context";
import cn from "./style.module.scss";
import db from "../../../db.json";
import Container from "../../components/Container/Container";

const Products = () => {
  const data = JSON.parse(JSON.stringify(db)).products;
  const { setCategoryOn, categoryOn } = useContext(ContextCategory);
  return (
    <div className={cn.Products}>
      <Container className={cn.Container}>
        <div className={cn.categories_wrap}>
          <Category
            onClick={() => {
              setCategoryOn("all");
            }}
            name="ALL"
          />
          <Category
            onClick={() => {
              setCategoryOn("vegetable");
            }}
            name="VEGETABLE"
          />
          <Category
            onClick={() => {
              setCategoryOn("fruit");
            }}
            name="FRUIT"
          />
          <Category
            onClick={() => {
              setCategoryOn("crops");
            }}
            name="CROPS"
          />
          <Category
            onClick={() => {
              setCategoryOn("melon crop");
            }}
            name="MELON CROP"
          />
          <Category
            onClick={() => {
              setCategoryOn("animal products");
            }}
            name="ANIMAL PRODUCTS"
          />
        </div>
        <div className={cn.products_wrap}>
          {data.map((el, index) => {
            if (categoryOn == "all") {
              return <CardOfMentor key={index} product={el} />;
            } else if (categoryOn == "vegetable") {
              if (el.type == "vegetable") {
                return <CardOfMentor key={index} product={el} />;
              }
            } else if (categoryOn == "fruit") {
              if (el.type == "fruit") {
                return <CardOfMentor key={index} product={el} />;
              }
            } else if (categoryOn == "melon crop") {
              if (el.type == "melon crop") {
                return <CardOfMentor key={index} product={el} />;
              }
            } else if (categoryOn == "animal products") {
              if (el.type == "animal products") {
                return <CardOfMentor key={index} product={el} />;
              }
            }
          })}
        </div>
      </Container>
    </div>
  );
};

export default Products;
