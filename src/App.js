import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <main className="App">
        <Route path="/" exact component={LandingPage} />
      </main>
    </Router>
  );
}

export default App;
