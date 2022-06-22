import React from "react"
import Container from "../components/Container/Container"
import DashboardNav from "../components/DashboardNav/DashboardNav"
import Title from "../components/Title/Title"

const adminLinks = [
  { url: "/dashboard/add", title: "Add product" },
  { url: "/dashboard/orders", title: "Orders" },
]

const clientLinks = [{ url: "/dashboard/orders", title: "Orders" }]

const Dashboard = () => {
  const roles = localStorage.getItem("roles")

  const links = localStorage.getItem("roles") === "1" ? adminLinks : clientLinks

  return (
    <Container>
      <Title title='Dashboard' />

      {roles === "1" && <DashboardNav links={links}></DashboardNav>}

      {roles === "0" && (
        <nav>
          <li>Orders</li>
        </nav>
      )}
    </Container>
  )
}

export default Dashboard
