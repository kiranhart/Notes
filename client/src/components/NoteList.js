import React, { useEffect } from 'react';
import styled from 'styled-components';
import Note from './Note';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

const NoteList = ({ notes }) => {
    return (
        <ListWrapper layout>
            {notes.map((note) => {
                return <Note key={note.id} note={note} />;
            })}
        </ListWrapper>
    );
};

const ListWrapper = styled(motion.div)`
    display: grid;
    margin-top: 1.3rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
`;

export default NoteList;
