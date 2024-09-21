import Container from "../../components/Container/Container";
import Banner from "./components/Banner";
import ProductsEx from "./components/Products";
import cn from "./style.module.scss";

const Home = () => {
  return (
    <div className={cn.Home}>
      <Container>
        <Banner />
        <ProductsEx />
      </Container>
    </div>
  );
};

export default Home;
