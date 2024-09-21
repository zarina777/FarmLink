import Card from "./components/Card";
import db from "../../../../../db.json";

import cn from "./style.module.scss";

const ProductsEx = () => {
  const data = JSON.parse(JSON.stringify(db)).products;

  return (
    <div className={cn.Mentors}>
      <div className={cn.heading}>
        <h1>FarmLink</h1>
        <h2>Find Top Agricultural Products with High Quality</h2>
      </div>
      <div className={cn.cards_wrap}>
        {data?.map((el, index) => {
          while (index < 6) {
            return (
              <Card
                key={index}
                type={el.type.toUpperCase()}
                img={el.img[0]}
                name={el.name}
                about={el.description.substring(0, 60)}
              />
            );
          }
        })}
      </div>
      <button className={cn.SeeMore}>See more</button>
    </div>
  );
};

export default ProductsEx;
