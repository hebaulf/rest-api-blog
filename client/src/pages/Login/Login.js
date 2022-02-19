import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { StyledLogin } from './styles';
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(isFetching);
  console.log(user);

  return (
    <StyledLogin className="login">
      <h1 className="login__title">Login</h1>
      
      <form className="login__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          className="login__input" 
          type="text" 
          placeholder="Enter your username..." 
          ref={userRef}
        />
        
        <label>Password</label>
        <input 
          className="login__input" 
          type="password" 
          placeholder="Enter your password..." 
          ref={passwordRef}
        />
        
        <button className="login__btn" type="submit" disabled={isFetching}>Login</button>
      </form>
      
      <button className="login__register-btn">
        <Link to="/register">Register</Link>
      </button>
    </StyledLogin>
  );
}

export default Login;