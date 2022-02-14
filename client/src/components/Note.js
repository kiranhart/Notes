import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Note = ({ note }) => {
    return (
        <StyledNote layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} color={note.color}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </StyledNote>
    );
};

const StyledNote = styled(motion.div)`
    background-color: ${({ color }) => color};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export default Note;
