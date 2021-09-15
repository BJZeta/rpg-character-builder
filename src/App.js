import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StandardName from "./pages/Standard/StandardName";

function App() {
  return (
    <Router>
      <main className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/home/name" component={StandardName} />
      </main>
    </Router>
  );
}

export default App;
