import Container from "../../components/Container";
import Banner from "./components/Banner";
import ProductsEx from "./components/Products";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <ProductsEx />
      </Container>
    </div>
  );
};

export default Home;
