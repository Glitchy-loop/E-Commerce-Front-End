import React from "react"
import Container from "../components/Container/Container"
import DashboardNav from "../components/DashboardNav/DashboardNav"
import Footer from "../components/Footer/Footer"
import Title from "../components/Title/Title"

const adminLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/view-products", title: "View products" },
  { url: "/dashboard/add", title: "Add product" },
  { url: "/dashboard/orders", title: "Orders" },
]
const clientLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/orders", title: "Orders" },
]
const roles = localStorage.getItem("roles")
const links = localStorage.getItem("roles") === "1" ? adminLinks : clientLinks

const Dashboard = () => {
  return (
    <>
      <Container>
        <Title title='Dashboard' />
        {roles === "1" && <DashboardNav links={links}></DashboardNav>}
        {roles === "0" && <DashboardNav links={links}></DashboardNav>}

        <p style={{ textAlign: "center" }}>
          Welcome to your dashboard. From here you can manager your orders.
          {roles === "1" && <span>And add, view, remove products.</span>}
        </p>
      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
