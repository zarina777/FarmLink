import cn from "./style.module.scss";

const CardOfMentor = ({ product }) => {
  return (
    <div className={cn.Card}>
      <div className={cn.private_profile}>
        <img src={product.img[1] ? product.img[1] : product.img[0]} alt="" />
        <div className={cn.info}>
          <h2>{product.name}</h2>
          <div className={cn.prof}>{product.type}</div>
          <p className={cn.p}>
            Top Products and Harvest | Sold to 50+ People in last 5 years
          </p>
          <div className={cn.likes}>
            <div className={cn.stars_wrap}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>5.0 (15 reviews)</p>
          </div>
          <ul className={cn.connection}>
            <li>
              <i className="fa-regular fa-comment"></i>
              <span>Chat available whole day</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>Call available 9 am to 10 pm</span>
            </li>
          </ul>
          <p>{product.description}</p>
        </div>
      </div>
      <div className={cn.skills}>
        {product.works?.map((el, index) => {
          return (
            <div className={cn.skill} key={index}>
              {el}
            </div>
          );
        })}
      </div>
      <div className={cn.order}>
        <div className={cn.hour}>{product.price}</div>
        <div className={cn.orderBtn}>Order and Connect with Fermer Now</div>
      </div>
    </div>
  );
};

export default CardOfMentor;
