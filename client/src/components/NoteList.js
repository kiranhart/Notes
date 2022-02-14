import React, { useEffect } from 'react';
import styled from 'styled-components';

const NoteList = ({ notes }) => {
    return (
        <ListWrapper>
            {notes.map((note) => {
                return (
                    <Note key={note.id} color={note.color}>
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                    </Note>
                );
            })}
        </ListWrapper>
    );
};

const ListWrapper = styled.div`
    display: grid;
    margin-top: 1.3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
`;

const Note = styled.div`
    background-color: ${({ color }) => color};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export default NoteList;
