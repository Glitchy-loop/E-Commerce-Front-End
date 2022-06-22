import React from "react"
import PropTypes from "prop-types"

const DashboardNav = ({ links }) => {
  return (
    <nav>
      {links && links.map((link) => <li to={link.url}>{link.title}</li>)}
    </nav>
  )
}

DashboardNav.propTypes = {}

export default DashboardNav
