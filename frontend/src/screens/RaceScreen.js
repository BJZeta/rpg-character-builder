import { useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import RaceCard from "../components/RaceCard";
import dragonborn from '../assets/dragonborn.jpeg'

export default function RaceScreen() {  

  return (
    <div>
      <Navbar />
      <h1>Race Screen</h1>
      <section>
        <RaceCard selectedRace="dragonborn" img={dragonborn} />
      </section>
    </div>
  );
}
