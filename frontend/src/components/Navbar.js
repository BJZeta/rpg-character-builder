import { LinkContainer } from "react-router-bootstrap";
import { HiHome } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <LinkContainer to="/home/name">
          <li>
            <HiHome /> HOME
          </li>
        </LinkContainer>
        <LinkContainer to="/home/race">
          <li>1.RACE</li>
        </LinkContainer>
        <LinkContainer to="/home/class">
          <li>2.CLASS</li>
        </LinkContainer>
        <LinkContainer to="/home/abilities">
          <li>3.ABILITIES</li>
        </LinkContainer>
        <LinkContainer to="/home/description">
          <li>4.DESCRIPTION</li>
        </LinkContainer>
        <LinkContainer to="/home/equipment">
          <li>5.EQUIPMENT</li>
        </LinkContainer>
        <LinkContainer to="/home/create">
          <li>CREATE</li>
        </LinkContainer>
        <LinkContainer to="/" exact>
          <li>RESET</li>
        </LinkContainer>
      </ul>
    </nav>
  );
}
