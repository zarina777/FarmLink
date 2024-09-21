import Container from "../../components/Container/Container"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import cn from "./style.module.scss";

const About = () => {
  return (
    <div className={cn.About}>
      <Container className={cn.container}>
        <div className={cn.about_box}>
        <Section1/>
        <Section2/>
        </div>
      </Container>
    </div>
  );
};

export default About;
