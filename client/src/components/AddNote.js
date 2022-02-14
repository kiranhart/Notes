import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { addNote } from '../redux/actions/noteActions';

const AddNote = () => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const [colorPicker, setColorPicker] = useState('#63b7f2');
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const content = contentRef.current.value;

        if (!title || !content) {
            toast.error('Please fill in all fields', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }

        dispatch(addNote(title, content, colorPicker));
    };

    return (
        <Form>
            <input ref={titleRef} type='text' placeholder='Title' />
            <textarea ref={contentRef} placeholder='Content' />
            <input name='color' type='color' value={colorPicker} onChange={(e) => setColorPicker(e.target.value)} />
            <button type='submit' value='Add Note' onClick={handleClick}>
                Create Note
            </button>
        </Form>
    );
};

const Form = styled.form`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;

    input,
    textarea {
        padding: 1rem;
        margin-bottom: 1rem;
        outline: none;
        font-size: 1rem;
        letter-spacing: 0.02rem;
    }

    input[type='color'] {
        width: 14rem;
        height: 3rem;
        padding: 0;
        background: none;
        border: none;
    }

    button {
        width: 14rem;
        padding: 1rem 1rem;
        background-color: #30a644;
        color: white;
        border: none;
        border-radius: 0.8rem;
        margin: 0 auto;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.01rem;

        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: #33693c;
        }
    }
`;

export default AddNote;
