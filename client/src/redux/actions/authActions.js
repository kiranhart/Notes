import axios from 'axios';
import { toast } from 'react-toastify';

export const login = (email, password) => {
    return (dispatch) => {
        axios
            .post('http://localhost:5000/users/login', { email, password })
            .then((response) => {
                const { token } = response.data;
                localStorage.setItem('token', token);

                dispatch({
                    type: 'LOGIN',
                    token: token,
                });
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    toast.error(error.response.data.message, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
            });
    };
};

export const register = (firstName, lastName, email, password) => {
    return (dispatch) => {
        axios
            .post('http://localhost:5000/users', {
                firstName,
                lastName,
                email,
                password,
            })
            .then((response) => {
                const { token } = response.data;
                localStorage.setItem('token', token);

                dispatch({
                    type: 'SIGN_UP',
                    token: token,
                });
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    toast.error(error.response.data.message, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
            });
    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        if (token) {
            dispatch({
                type: 'LOAD_USER',
                token,
            });
        } else return null;
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT',
        });
    };
};
