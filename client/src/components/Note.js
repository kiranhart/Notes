import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeNote } from '../redux/actions/noteActions';

const Note = ({ note }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeNote(note.id));
    };

    return (
        <StyledNote layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} color={note.color}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </StyledNote>
    );
};

const StyledNote = styled(motion.div)`
    background-color: ${({ color }) => color};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;

    > div {
        margin-left: auto;

        button {
            background: #9c0202;
            border: none;
            color: #fff;
            font-size: 1rem;
            padding: 0.6rem 0.5rem;
            border-radius: 0.5rem;
            transition: all 200ms;
            cursor: pointer;

            &:hover {
                background: #bf0202;
            }
        }
    }
`;

export default Note;
