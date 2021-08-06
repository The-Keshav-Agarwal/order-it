import React from "react"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Page.scss"
import { Container, Header, Segment, Divider } from "semantic-ui-react";

const Page = () => {
    return (
    <>
        <Container>
    <Segment>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img src="/images/google-logo.jpg" alt="food" className="food-image" />
          </div>
          <div className="each-slide">
              <img src="/images/google-logo.jpg" alt="food" className="food-image"/>
          </div>
          <div className="each-slide">
              <img src="/images/google-logo.jpg" alt="food" className="food-image"/>
          </div>
        </Slide>
      </div>

      <Header as="h1">Restaurant Name</Header>
      <p> City | Country | Dish name</p>
      <Divider />
      <Header as="h2">Rs 500 at 10% discount </Header>
    </Segment>
      </Container>

</>
    )
}

export default Page;