import styled from 'styled-components';
import React from 'react';

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5>
                    <a href="/home">Hiring in hurry? - </a>
                    <p>Find talented pros in record time with Upwork and keep business moving.</p>
                </h5>
            </Section>
        </Container>
    );
}

// Homes Styles

// Container
const Container = styled.div`
    padding-top: 52px;
`;

// Content
// const Content = styled.div`
    
// `;

// Initial Section
const Section = styled.div`
    
`;

export default Home;
