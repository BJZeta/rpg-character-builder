import { useEffect } from "react";
// import { checkSelectedRace } from "../actions/characterActions";

export default function AbilitiesScreen() {
  useEffect(() => {
    const checkRace = localStorage.getItem("race");

    if (checkRace) {
      console.log("selected race");
    } else {
      alert("No Race Selected");
    }
  }, []);

  return (
    <div>
      <h1>Abilities Screen</h1>
    </div>
  );
}
