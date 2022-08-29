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
            <h2 style={{ textAlign: "center" }}>
              WE BELIEVE IN HONEST FURNITURE
            </h2>
            <br />
            Honesty is important to us in both our furniture and our business.
            We make exceptional furniture devoid of drama or ego. Our designs
            are simple on purpose to ground your space without demanding the
            spotlight. We conduct our business with honesty, openness, and a
            desire to build a community of like-minded people working towards a
            common goal.
            <h2 style={{ textAlign: "center" }}>
              WE BELIEVE IN PROTECTING WHERE WE LIVE
            </h2>
            <br />
            It is our mandate to protect the earth we love and do our part to
            care for its natural resources. But to us, this means more than just
            environmental sustainability. It means heavily investing in our
            community. We believe in growing the local economy and keeping
            manufacturing right here in Canada.
            <h2 style={{ textAlign: "center" }}>
              {" "}
              WE BELIEVE IN INNOVATIVE SOLUTIONS
            </h2>
            <br />
            We bridge the gap between design and manufacturing. Our
            multi-discipline experience and intimacy with our material allows
            for extraordinary innovation in the design, engineering, and
            manufacturing of solid wood furniture. Say we can’t, and we will.
            Custom joints, one of a kind hinges, and unique lighting solutions
            are all in our repertoire. We tackle challenges with knowledge and
            vision.
          </p>
        </Section>
      </Container>
    </>
  )
}

export default About
