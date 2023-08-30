import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Post"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Service"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            Service
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
