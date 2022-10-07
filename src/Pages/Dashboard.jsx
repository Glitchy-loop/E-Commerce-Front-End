import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../components/Container/Container"
import DashboardNav from "../components/DashboardNav/DashboardNav"
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

const Dashboard = () => {
  const navigate = useNavigate()

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [roles, setRoles] = useState(localStorage.getItem("roles"))

  const links = roles === "1" ? adminLinks : clientLinks

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <Container>
        <Title title='Dashboard' />
        {roles === "1" && <DashboardNav links={links}></DashboardNav>}
        {roles === "0" && <DashboardNav links={links}></DashboardNav>}

        <p style={{ textAlign: "center" }}>
          Welcome to your dashboard. From here you can view orders
          {roles === "1" && <span> and add, view, remove products.</span>}
        </p>
      </Container>
    </>
  )
}

export default Dashboard
