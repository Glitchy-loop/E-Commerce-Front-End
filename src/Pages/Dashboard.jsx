import React from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"

const Dashboard = () => {
  const roles = localStorage.getItem("roles")

  return (
    <Container>
      <Title title='Dashboard' />

      {roles === "1" && <div>admin</div>}

      {roles === "0" && <div>Client</div>}
    </Container>
  )
}

export default Dashboard
