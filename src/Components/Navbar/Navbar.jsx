import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useMediaQuery } from "../../Hooks";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <div className={style.container}>
      <ul className={style.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <img src="/images/oikyotan.svg" alt="img" width={isMobile ? 100 : 140} />
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
