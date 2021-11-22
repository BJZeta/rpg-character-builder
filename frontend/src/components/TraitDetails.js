import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function TraitDetails({ trait_name }) {
  const [trait, setTrait] = useState({});
  useEffect(() => {
    const traitResults = async () => {
      const response = await axios.get(
        `https://www.dnd5eapi.co/api/traits/${trait_name}`
      );
      setTrait(response.data);
    };
    traitResults();
  }, []);

  const { name, desc } = trait;

  return (
    <TraitCard>
      <h1>{name}</h1>
      <p>
        {desc}
      </p>
    </TraitCard>
  );
}

const TraitCard = styled.div`
  background-color: gray;
`;
