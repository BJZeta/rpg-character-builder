import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <Landing>
      <h1>Character Creation Method</h1>
      <h4>Choose one of three ways to create your character</h4>
      <section>
        <LinkContainer to="/home/base">
          <button>
            <h3>Standard</h3>
            <p>
              Create a character by making choices using a step-by-step
              approach.
            </p>
          </button>
        </LinkContainer>
      </section>
    </Landing>
  );
}

const Landing = styled.div`
  background-color: black;

  h1,
  h4 {
    color: white;
  }

  section {
    display: grid;
  }
`;
