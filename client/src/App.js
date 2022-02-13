import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';

const App = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <div>
                            <h1>Home</h1>
                            <p>Welcome to the home page</p>
                            {user && user.id}
                        </div>
                    }
                />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
