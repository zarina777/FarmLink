import cn from "./style.module.scss";

const Card = ({ type, name, img ,description }) => {
  return (
    <div className={cn.Card_wrap}>
      <div style={{ backgroundImage: `url(${img})` }} className={cn.Card}>
        <span className={cn.type}>{type}</span>
      </div>
      <div className={cn.info}>
        <h3>{name}</h3>
        <p>{description}...</p>
        <button>Learn more...</button>
      </div>
    </div>
  );
};

export default Card;
