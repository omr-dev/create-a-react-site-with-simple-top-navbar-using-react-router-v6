import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/welcome">Welcome</NavLink> |
        </li>
        <li>
          <NavLink to="/books">Books</NavLink> |
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
