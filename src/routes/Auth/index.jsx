import cn from "./style.module.scss";
import Container from "../../components/Container/Container";
import Signup from "./Signup";
import Login from "./Login";
import { useParams } from "react-router-dom";


const Auth = () => {
  const { action } = useParams();

  
  return (
    <div className={cn.Auth}>
      <Container className={cn.container}>
        {action === "signup" ? (
          <Signup />
        ) : action === "login" ? (
          <Login />
        ) : (
          <div>Invalid Action</div>
        )}
      </Container>
    </div>
  );
};

export default Auth;
