import { NavLink } from "react-router";
import "./Navigation.css";

export const Navigation = () => {
    return (
        <nav>
        <ul className="navigation">
            <li>
            <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
            <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
            <NavLink to={"/Animals"}>Animals</NavLink>
            </li>
            <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
        </ul>
        </nav>
    );
    }