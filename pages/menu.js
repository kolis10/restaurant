import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "../components/nav";
import { Food } from "../components/food";
import fetch from "isomorphic-unfetch";
import "./styles.css";

function Menu(props) {
  return (
    <div>
      <Navigation />
      <Food />
    </div>
  );
}

Menu.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.codexsw.dev/api/list?collection=menuitems')
  return await res.json()

}

export default Menu