import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import NoteGroupList from '../components/NoteGroupList';
import NoteList from '../components/NoteList';
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
                <br />
                <h2>Notes</h2>
                {notes && notes.length > 0 ? <NoteList notes={notes} /> : <p>No notes yet</p>}
            </Section>

            <hr />

            <Section>
                <br />
                <h2>Note Groups</h2>
                <p>Groups are used to categorize your notes.</p>
                <p>No Groups Yet</p>
            </Section>
        </Wrapper>
    );
};
const Section = styled.section``;

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 1.5;

    hr {
        margin: 1rem 0;
    }
`;

export default Dashboard;
