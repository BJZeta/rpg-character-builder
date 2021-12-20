import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import NameScreen from "./screens/NameScreen";
import RaceScreen from "./screens/RaceScreen";
import ClassScreen from "./screens/ClassScreen";
import DescriptionScreen from "./screens/DescriptionScreen";
import AbilitiesScreen from "./screens/AbilitiesScreen";
import EquipmentScreen from "./screens/EquipmentScreen";

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/" exact component={LandingScreen} />
          <Route component={NameScreen} path="/home/name" />
          <Route component={RaceScreen} path="/home/race" />
          <Route component={ClassScreen} path="/home/class" />
          <Route component={AbilitiesScreen} path="/home/abilities" />
          <Route component={DescriptionScreen} path="/home/description" />
          <Route component={EquipmentScreen} path="/home/equipment" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
