import Navbar from "../components/Navbar";
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
    <div>
      <Navbar />
      <h1>Race Screen</h1>
      <section>
        <RaceCard selectedRace="dragonborn" img={dragonborn} icon={dragonborn} />
        <SubraceCard selectedRace="high-elf" img={high_elf} />
        <RaceCard selectedRace="half-elf" img={half_elf} />
        <RaceCard selectedRace="half-orc" img={half_orc} />
        <RaceCard selectedRace="human" img={human} />
        <RaceCard selectedRace="tiefling" img={tiefling} />
      </section>
    </div>
  );
}
