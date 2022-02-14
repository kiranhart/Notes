import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth.id) {
            return navigate('/dashboard');
        }
    }, [auth]);

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        dispatch(login(email, password));
    };

    return (
        <LoginWrapper>
            <LoginCard>
                <div className='heading'>
                    <h1>Login</h1>
                    <h3>
                        Don't have an account? <Link to='/register'>Sign up</Link>
                    </h3>
                </div>
                <form>
                    <input ref={emailRef} type='email' id='email' placeholder='E-mail' />
                    <input ref={passwordRef} type='password' id='password' placeholder='Password' />
                    <button onClick={handleLogin} type='submit'>
                        Login
                    </button>
                </form>
            </LoginCard>
        </LoginWrapper>
    );
};

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const LoginCard = styled.div`
    padding: 3rem 4rem;
    background: #fff;
    color: #111;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    width: 30rem;

    display: flex;
    flex-direction: column;

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 2.5rem;
        }

        h3 {
            margin-top: 0.2rem;
            font-size: 1rem;
            font-weight: 500;

            a {
                color: #4da8f7;
            }
        }
    }

    form {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        input,
        button {
            margin-top: 0.5rem;
            padding: 0.8rem 0.9rem;
            border-radius: 0.5rem;
            border: none;
            width: 100%;
            background: #e6e6e6;
            border: 1px solid #b3b3b3;
            font-size: 1rem;

            &:focus {
                outline: none;
            }
        }

        button {
            background: #4da8f7;
            color: white;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                background: #519ed6;
            }
        }
    }
`;

export default Login;
