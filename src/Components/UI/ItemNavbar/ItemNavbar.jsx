import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({contentItem, myStyles, route}) => {
  return (
    <li className="m-4">
      <NavLink className={myStyles} to={route}>{contentItem}</NavLink>
    </li>
  )
}
