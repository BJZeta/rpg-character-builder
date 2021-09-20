import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StandardPage from "./pages/StandardPage";
import Navbar from "./components/Navbar";
import NameScreen from "./screens/NameScreen";
import RaceScreen from "./screens/Race";
import ClassScreen from "./screens/ClassScreen";
import DescriptionScreen from "./screens/DescriptionScreen";
import AbilitiesScreen from "./screens/AbilitiesScreen";
import EquipmentScreen from "./screens/EquipmentScreen";

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home">
            <Navbar />
            <Route component={NameScreen} path="/" exact />
            <Route component={RaceScreen} path="/race" />
            <Route component={ClassScreen} path="/class" />
            <Route component={AbilitiesScreen} path="/abilities" />
            <Route component={DescriptionScreen} path="/home/name" />
            <Route component={EquipmentScreen} path="/equipment" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
