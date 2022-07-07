import React from "react"
import Container from "../components/Container/Container"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section"

const About = () => {
  return (
    <>
      <Container>
        <Hero
          title='About'
          imgUrl='https://cdn.pixabay.com/photo/2020/08/25/18/28/flower-vase-5517745_960_720.jpg'
        />
        <Section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aspernatur libero ab obcaecati minima, eaque, deleniti earum quas
            incidunt voluptatum blanditiis aperiam accusamus? Dicta nesciunt
            tenetur cupiditate placeat. Dignissimos, architecto!
          </p>
        </Section>
      </Container>
    </>
  )
}

export default About
