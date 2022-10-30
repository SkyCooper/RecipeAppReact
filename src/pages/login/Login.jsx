import { useNavigate } from "react-router-dom";
import { Div, Input, Button } from "./Login.styled";

const Login = ({ setIsloggedin }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsloggedin(true);
    navigate(-1);
  };

  return (
    <Div>
      <Input type="text" required placeholder="USERNAME" />
      <Input type="text" required placeholder="PASSWORD" />
      <Button onClick={handleClick}> LOGIN</Button>
    </Div>
  );
};

export default Login;
