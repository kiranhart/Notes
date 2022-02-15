import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL, setHeaders } from '../../util';

export const getNotes = () => {
    return (dispatch) => {
        axios
            .get(`${API_URL}/notes`, setHeaders())
            .then((response) => {
                const { notes } = response.data;

                dispatch({
                    type: 'GET_NOTES',
                    notes,
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

export const removeNote = (id) => {
    return (dispatch) => {
        axios
            .delete(`${API_URL}/notes/${id}`, setHeaders())
            .then((response) => {
                const { id } = response.data;

                dispatch({
                    type: 'REMOVE_NOTE',
                    id,
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

export const addNote = (title, content, color) => {
    return (dispatch) => {
        axios
            .post(`${API_URL}/notes`, { title, content, color }, setHeaders())
            .then((response) => {
                const { note } = response.data;

                dispatch({
                    type: 'ADD_NOTE',
                    note,
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
