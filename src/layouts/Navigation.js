import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigatin.css";

const list = [
  {name:"Start", path:"/", exact: true},
  {name:"Produkty", path:"/products"},
  {name:"Kontakt", path:"/contact"},
  {name:"Panel admina", path:"/admin"},
]

const Navigation = () => {
  const navList = list.map(nav => {
    return (
      <li key={nav.name}>
        <NavLink to={nav.path} exact={nav.exact ? nav.exact : false}>{nav.name}</NavLink>
    </li>
  )
  })
  console.log(navList);

  return (
    <nav className="main">
      <ul>
        {navList}
      </ul>
    </nav>
   );
}

export default Navigation;