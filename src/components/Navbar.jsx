import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/jobs", text: "Jobs" },
  { to: "/add-job", text: "Add Job" },
];

const linkClass = ({ isActive }) =>
  (isActive
    ? "bg-black text-white"
    : "text-white hover:bg-gray-900 hover:text-white") +
  " rounded-md px-3 py-2";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <nav className="flex space-x-2">
                {LINKS.map((link) => (
                  <NavLink key={link.to} to={link.to} className={linkClass}>
                    {link.text}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
