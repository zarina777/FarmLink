import Contacts from "./Contacts";
import Container from "../../components/Container";
import FormMessage from "./components/Form";
import FAQ from "./components/FAQ";
import cn from "./style.module.scss";

const ContactPage = () => {
  return (
    <Container>
      <div className={cn.contactPage}>
        <FAQ />
        <div className={cn.box_info}>
          <Contacts/>
          <FormMessage/>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
