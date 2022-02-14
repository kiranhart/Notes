import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import logoImage from '../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <NavbarContainer className='navbar'>
            <div className='logo'>
                <img src={logoImage} alt='logo' />
                <h1>NOTES</h1>
            </div>
            <ul>
                {!auth && <NavLink to='/'>Home</NavLink>}
                {auth.id && (
                    <NavLink to='/dashboard' className={(data) => (data.isActive ? 'active' : '')}>
                        Dashboard
                    </NavLink>
                )}
            </ul>
            {auth.id && (
                <div className='button-logout'>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </NavbarContainer>
    );
};

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    width: 100%;

    .logo {
        width: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            margin-bottom: 1rem;
            width: 100%;
        }
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        flex-direction: column;
        text-align: center;
        flex: 1;
        gap: 2.8rem;
        width: 90%;

        font-weight: 600;
        font-size: 1.1rem;
    }

    .active {
        background: #bb7dfa;
        border: none;
        color: white;
        padding: 1rem;
        width: 100%;
        border-radius: 1rem;
        font-weight: 500;
    }

    .button-logout {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex: 1;

        button {
            background: #ed5555;
            border: none;
            color: white;
            padding: 1rem;
            width: 100%;
            border-radius: 1rem;
            font-weight: 500;
            font-size: 1.1rem;
            transition: all 200ms;

            &:hover {
                background: #ed5555;
                cursor: pointer;
            }
        }
    }
`;

export default Navbar;
