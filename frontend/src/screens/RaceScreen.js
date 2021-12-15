import { Link } from "react-router-dom";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import styled from "styled-components";
import RaceCard from "../components/RaceCard";
import dragonborn from "../assets/dragonborn.jpeg";
import half_elf from "../assets/half-elf.jpeg";
import half_orc from "../assets/half-orc.jpeg";
import human from "../assets/human.jpeg";
import tiefling from "../assets/tiefling.jpeg";
import high_elf from "../assets/high-elf.jpeg";
import SubraceCard from "../components/SubraceCard";

export default function RaceScreen() {

  return (
    <RaceLayout>
      <Link to="/home/name">
        <BsFillArrowLeftSquareFill className="arrow-button" />
      </Link>
      <h1>Race Screen</h1>
      <section>
        <RaceCard
          selectedRace="dragonborn"
          img={dragonborn}
          icon={dragonborn}
        />
        <SubraceCard
          selectedRace="elf"
          selectedSubrace="high-elf"
          img={high_elf}
        />
        <RaceCard selectedRace="half-elf" img={half_elf} />
        <RaceCard selectedRace="half-orc" img={half_orc} />
        <RaceCard selectedRace="human" img={human} />
        <RaceCard selectedRace="tiefling" img={tiefling} />
      </section>
      <Link to="/home/abilities">
        <BsFillArrowRightSquareFill className="arrow-button" />
      </Link>
    </RaceLayout>
  );
}

const RaceLayout = styled.div`
  .arrow-button {
    font-size: 50px;
    color: black;
  }

  .arrow-button:hover {
    color: red;
  }
`;
