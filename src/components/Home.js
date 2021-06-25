import styled from "styled-components";
import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Main from "./Main";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h5>
          <a href="/home">Hiring in hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

// Homes Styles

// Container
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

// Content
// const Content = styled.div`
//     max-width: 1128px;
//     margin-left: auto;
//     margin-right: auto;
// `;

// Initial Section
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

// Layout
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
