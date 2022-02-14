import React from 'react';
import styled from 'styled-components';

const NoteGroupList = () => {
    return <ListWrapper>NoteGroupList</ListWrapper>;
};

const ListWrapper = styled.div`
    display: grid;
    margin-top: 1.3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
`;

export default NoteGroupList;
