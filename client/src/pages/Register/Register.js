import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledRegister } from "./styles"

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password
            });
            res.data && window.location.replace('/login');
        } catch (err) {
            setError(true)
        }
    }

    return (
        <StyledRegister className="register">
            <span className="register__title">Register</span>
            
            <form className="register__form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    className="register__input" 
                    type="text" 
                    placeholder="Enter your username..." 
                    onChange={e => setUsername(e.target.value)}
                />
                
                <label>Email</label>
                <input 
                    className="register__input" 
                    type="text" 
                    placeholder="Enter your email..." 
                    onChange={e => setEmail(e.target.value)}
                />
                
                <label>Password</label>
                <input 
                    className="register__input" 
                    type="password" 
                    placeholder="Enter your password..." 
                    onChange={e => setPassword(e.target.value)}
                />
                
                <button className="register__btn" type="submit">Register</button>
            </form>

            <button className="register__login-btn">
                <Link to="/login">Login</Link> 
            </button>
            {error && <span className="msg__error">Something went wrong!</span>}
        </StyledRegister>
    )
}

export default Register;