import React from "react";
import { NavLink } from "react-router-dom";

export const ItemNavbar = ({ contentItem, activeColorClass, hoverColorClass, route }) => {
  return (
    <li className="m-4">
      <NavLink
        className={({ isActive }) =>
          `relative text-lg ${hoverColorClass} transition-colors ${isActive ? activeColorClass : ""
          }`
        }
        to={route}
      >
        {contentItem}
        <span
          className={`absolute bottom-0 left-0 w-0 h-0.5 ${activeColorClass.replace(
            "text",
            "bg"
          )} transition-all duration-300 hover:w-full`}
        ></span>
      </NavLink>
    </li>
  )
}