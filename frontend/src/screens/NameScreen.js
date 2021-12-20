import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NameScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    const localName = localStorage.getItem('name');

    if(!localName) {
      setName("My Character")
    } else {
      setName(localName);
    }
  }, [])

  let history = useHistory();

  const handleSetName = (name) => {
    if (name === "") {
      alert("Please enter a name first");
    } else {
      localStorage.setItem("name", name);
      history.push("/home/race");
    }
  };

  return (
    <NameLayout>
      <Link to="/">
        <BsFillArrowLeftSquareFill className="arrow-button" />
      </Link>
      <h1>Name Screen</h1>
      <section>
        <img src={`${process.env.PUBLIC_URL}/img/placeholder.png`} />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>
      <Link to="/home/race" onClick={() => handleSetName(name)}>
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
