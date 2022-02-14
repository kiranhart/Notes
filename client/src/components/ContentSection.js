import React from 'react';
import styled from 'styled-components';

const ContentSection = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    background: #fff;
    color: #111;
    border-radius: 1rem;
    height: auto;
    padding: 2rem;
`;

export default ContentSection;
