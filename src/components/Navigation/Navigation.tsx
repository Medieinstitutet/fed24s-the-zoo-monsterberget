import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav className="bg-amber-600 flex p-5 justify-between items-center">
      <ul className="flex justify-between p-10 max-w-full mx-auto">
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
};
