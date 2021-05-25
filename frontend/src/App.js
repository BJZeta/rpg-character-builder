import "./bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={LandingPage} />
      </Container>
    </Router>
  );
}

export default App;
