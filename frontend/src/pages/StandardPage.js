import Navbar from "../components/Navbar";
import NameScreen from "../screens/NameScreen";
import ClassScreen from "../screens/ClassScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function StandardPage() {
  return (
    <div>
      <Navbar />
      <Route component={NameScreen} path="/home/name" />
      <Route component={ClassScreen} path="/home/class" />
      <Route component={DescriptionScreen} path="/home/name" />
      <Route component={NameScreen} path="/home/name" />
      <Route component={NameScreen} path="/home/name" />
    </div>
  );
}
