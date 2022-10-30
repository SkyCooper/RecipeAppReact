import { useNavigate } from "react-router-dom";

const Login = ({ setIsloggedin }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setIsloggedin(true);
    navigate(-1)
  };

  return (
    <div>
      <input type="text" placeholder="USERNAME" required />
      <input type="text" placeholder="PASSWORD" required />
      <button onClick={handleClick} > LOGIN</button>
    </div>
  );
};

export default Login;
