import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';
import HeaderIcons from '../subComponents/headerIcons.js'
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => {

  let descriptionArray = ["Full Stack Web Developer", "Proud UConn Alum", "Fitness Junkie", "Shameless Foodie", "World Traveler"]

  return(
    <Container id="home">
      <Header
        as='h1'
        content='Kevin Malazarte'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <ReactTypingEffect
        as='h2'
        speed = "92"
        eraseDelay = "1000"
        text = {descriptionArray}
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '.7em',
          marginBottom: mobile ? '0.5em' : '.7em',
        }}
      />

      <div>
        <a href="https://drive.google.com/file/d/15qxRNHvhRobXFZ_izpsey_lLUF26eG4r/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button inverted color='blue' size='large'>
            View My Resume &nbsp;
            <i class="far fa-file"></i>
          </Button>
        </a>
      </div>
      <HeaderIcons/>
    </Container>
  )}

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

export default HomepageHeading
