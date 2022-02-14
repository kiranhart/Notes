import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import NoteList from '../components/NoteList';
import AddNote from '../components/AddNote';

import { loadUser } from '../redux/actions/authActions';
import { getNotes } from '../redux/actions/noteActions';

const Dashboard = () => {
    const auth = useSelector((state) => state.auth);
    const notes = useSelector((state) => state.note);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
        dispatch(getNotes());
    }, []);

    return (
        <Wrapper>
            <h1>Welcome {auth.firstName}</h1>
            <p>This is your dashboard, you can create, edit, and delete notes from here.</p>
            <hr />

            <Section>
                <h2>New Note</h2>
                <AddNote />
            </Section>

            <hr />

            <Section>
                <br />
                <h2>Notes</h2>
                {notes && notes.length > 0 ? <NoteList notes={notes} /> : <p>No notes yet</p>}
            </Section>
        </Wrapper>
    );
};
const Section = styled.section``;

const Wrapper = styled.div`
    margin: 0 auto;
    line-height: 1.5;

    hr {
        margin: 1rem 0;
    }
`;

const FloatingAddButton = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #30a644;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #31d44c;
    }
`;

export default Dashboard;
