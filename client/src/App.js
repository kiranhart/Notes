import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ContentSection from './components/ContentSection';
import Navbar from './components/Navbar';
import { loadUser } from './redux/actions/authActions';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import styled from 'styled-components';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return (
        <>
            <ToastContainer />
            <LayoutWrapper>
                <Navbar />
                <ContentSection>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <div>
                                    <h1>Home</h1>
                                    <p>Welcome to the home page</p>
                                </div>
                            }
                        />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Routes>
                </ContentSection>
            </LayoutWrapper>
        </>
    );
};

const LayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 13vw 1fr;
    grid-template-rows: calc(100vh - 1.6rem);
`;

export default App;
