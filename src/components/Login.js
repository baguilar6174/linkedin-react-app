import styled from 'styled-components';
import React from 'react'

// Functional component generated with rafcp shortcut
const Login = (props) => {
    return (
        <Container>
            {/* Navigation bar */}
            <Nav>
                {/* LinkedIN Logo */}
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    {/* Join Button */}
                    <Join>Únete ahora</Join>
                    {/* Signin Button */}
                    <SignIn>Iniciar sesión</SignIn>
                </div>
            </Nav>
            {/* Section text & image */}
            <Section>
                {/* Hero section */}
                <Hero>
                    <h1>Bienvenido a tu comunidad profesional</h1>
                    <img src="/images/login-hero.svg" alt=""/>
                </Hero>
                {/* Google Signin */}
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt=""/>
                        Iniciar sesión con Google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
}

// Login Styled

// COntainer
const Container = styled.div`
    padding: 0;
`;

// Nav
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;

        @media (max-width: 768px){
            padding: 0 5px;
        }
    }
`;

// Join Button
const Join = styled.a`
    font-size: 1rem;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;

    &:hover {
        background-color: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`;

// SignIn Button
const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 1rem;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);

    &:hover {
        background-color: rgba(112, 181, 249, .15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

// Hero section
const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`;

// Hero
const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img {
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;

        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

// Form
const Form = styled.div`
    margin-top: 100px;
    width: 408px;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

// Google Sign in
const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, .6);

    &:hover {
        background-color: rgba(207, 207, 207, .25);
        color: rgba(0, 0, 0, .75)
    }
`;

export default Login
