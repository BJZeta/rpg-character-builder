import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import RaceModal from "./RaceModal";
import styled from "styled-components";

export default function RaceCard({ selectedRace, img }) {
  const [race, setRace] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  let history = useHistory();

  const handleSelectedRace = (selectedRace) => {
    console.log(JSON.stringify(selectedRace));
    history.push("/home/abilities");
  };

  useEffect(() => {
    const raceResults = async () => {
      const response = await axios(
        `https://www.dnd5eapi.co/api/races/${selectedRace}`
      );
      setRace(response.data);
      console.log(race);
    };
    raceResults();
  }, []);
  return (
    <Card onClick={() => setIsOpen(!isOpen)}>
      <img src={img} alt={race.name} />
      <h1>{race.name}</h1>
      <RaceModal
        onClose={() => setIsOpen(!isOpen)}
        open={isOpen}
        race={race}
        icon={img}
        onSelectRace={() => handleSelectedRace(race)}
      />
    </Card>
  );
}

const Card = styled.div`
  :hover {
    cursor: pointer;
  }
`;
