import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Navigation } from "../components/nav";
import { MenuCarousel } from "../components/menucarousel";
import "./styles.css";

export default () => (
  <div className="menuContainer">
    <div>
      <Navigation />
    </div>
    <div>
      <MenuCarousel />
    </div>
  </div>
);
