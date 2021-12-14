import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NameScreen() {
  return (
    <NameLayout>
      <Link to="/">
        <BsFillArrowLeftSquareFill className="arrow-button" />
      </Link>
      <h1>Name Screen</h1>
      <section>
        <img src={`${process.env.PUBLIC_URL}/img/placeholder.png`} />
        <input />
      </section>
      <Link to="/home/race">
        <BsFillArrowRightSquareFill className="arrow-button" />
      </Link>
    </NameLayout>
  );
}

const NameLayout = styled.div`
  .arrow-button {
    font-size: 50px;
    color: black;
  }

  .arrow-button:hover {
    color: red;
  }
`;
