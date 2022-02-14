import axios from 'axios';
import { toast } from 'react-toastify';
import { setHeaders } from '../../util';

export const getNotes = () => {
    return (dispatch) => {
        axios
            .get('http://localhost:5000/notes', setHeaders())
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
