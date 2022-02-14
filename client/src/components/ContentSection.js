import React from 'react';
import styled from 'styled-components';

const ContentSection = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    background: #ededed;
    color: #111;
    border-radius: 1rem;
    height: 100%;
`;

export default ContentSection;
