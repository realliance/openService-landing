import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className={"navbar navbar-light"} style={{backgroundColor: '#e3f2fd'}}>
    <span className={"navbar-brand mb-0 h1"}>openService</span>
    <ul className={"navbar-nav"}>
      <li className={"nav-item my-auto"}>
        <Link className={"nav-link"} to="/page-2/">Request a Website</Link>
      </li>
    </ul>
  </nav>
)

export default Header
