import cn from "./style.module.scss";
import ImageWrapper from "../imageWrapper";
import img from "./farmer.webp";
const Section1 = () => {
  return (
    <div className={cn.Section1_wrapper}>
      <div className={cn.box1}>
        <h4>About Agriculture farm</h4>
        <h1>Our Company and the Traditions of Agricultural Farming</h1>
        <p>
          FarmLink is a platform that connects farmers with business owners,
          enabling reliable transactions and streamlining the supply chain for
          fresh, local products, fostering sustainable growth in the
          agriculture-business ecosystem
        </p>
        <p>
          It reduces the time consumption of searching for the best farmers with high quality product.
        </p>
        <p>
          We provide an opportunity to business owners connecting directly with
          farmers offering fresh, high-quality products while ensuring
          efficiency and value in every transaction
        </p>
      </div>
      <ImageWrapper
        src={img}
        alt="Image about farm"
        className={cn.ImageWrapper}
      />
    </div>
  );
};

export default Section1;
