import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth.id) {
            return navigate('/');
        }
    }, [auth]);

    const handleLogin = async (event) => {
        event.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!firstName || !lastName || !email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        dispatch(register(firstName, lastName, email, password));
        navigate('/');
    };

    return (
        <RegisterWrapper>
            <RegisterCard>
                <div className='heading'>
                    <h1>Sign Up</h1>
                    <h3>
                        Already have an account? <Link to='/login'>Login</Link>
                    </h3>
                </div>
                <form>
                    <input ref={firstNameRef} type='text' id='firstName' placeholder='First Name' />
                    <input ref={lastNameRef} type='text' id='lastName' placeholder='Last Name' />
                    <input ref={emailRef} type='email' id='email' placeholder='Email' />
                    <input ref={passwordRef} type='password' id='password' placeholder='Password' />
                    <button onClick={handleLogin} type='submit'>
                        Sign Up
                    </button>
                </form>
            </RegisterCard>
        </RegisterWrapper>
    );
};

const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background: linear-gradient(200deg, #bfb2f3, #96caf7, #9cdcaa, #e5e1ab, #f3c6a5, #f8a3a8);
    background-size: 1200% 1200%;

    -webkit-animation: PastelGradientAnimation 30s ease infinite;
    -moz-animation: PastelGradientAnimation 30s ease infinite;
    animation: PastelGradientAnimation 30s ease infinite;

    @-webkit-keyframes PastelGradientAnimation {
        0% {
            background-position: 0% 40%;
        }
        50% {
            background-position: 100% 61%;
        }
        100% {
            background-position: 0% 40%;
        }
    }

    @-moz-keyframes PastelGradientAnimation {
        0% {
            background-position: 0% 40%;
        }
        50% {
            background-position: 100% 61%;
        }
        100% {
            background-position: 0% 40%;
        }
    }

    @keyframes PastelGradientAnimation {
        0% {
            background-position: 0% 40%;
        }
        50% {
            background-position: 100% 61%;
        }
        100% {
            background-position: 0% 40%;
        }
    }
`;

const RegisterCard = styled.div`
    padding: 3rem 4rem;
    background: #fff;
    color: #111;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
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

export default Register;
