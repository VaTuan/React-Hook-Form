import { NavLink } from "react-router-dom";
import { routes } from "routes/constant";

function Sidebar() {
  return (
    <div className="side-bar col-span-1 h-screen bg-sidebar">
      <ul className="text-white divide-y divide-blue-100">
        {routes.map((route, index) => {
          return (
            <li key={index} className="p-3 hover:text-secondary-100 transition duration-300 ease-in-out block">
              <NavLink exact={route.exact} to={route.path} activeClassName="active-link" className="block">
                {route.display}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
