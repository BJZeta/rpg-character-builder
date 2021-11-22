import axios from "axios";
import { useEffect, useState } from "react";
import SubraceModal from "./SubraceModal";
import styled from "styled-components";

export default function SubraceCard({ selectedRace, selectedSubrace, img }) {
  const [race, setRace] = useState({});
  const [subrace, setSubrace] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const raceResults = async () => {
      const response = await axios(
        `https://www.dnd5eapi.co/api/races/${selectedRace}`
      );
      setRace(response.data);
    };
    const subraceResults = async () => {
      const response = await axios(
        `https://www.dnd5eapi.co/api/subraces/${selectedSubrace}`
      );
      setSubrace(response.data);
    };
    raceResults();
    subraceResults();
  }, []);
  return (
    <Card onClick={() => setIsOpen(!isOpen)}>
      <img src={img} alt={race.name} />
      <h1>{race.name}</h1>
      <SubraceModal
        onClose={() => setIsOpen(!isOpen)}
        open={isOpen}
        race={race}
        icon={img}
        subrace={subrace}
      />
    </Card>
  );
}

const Card = styled.div`
  :hover {
    cursor: pointer;
  }
`;
