import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => {
  return(
    <Container text id="home">
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
      <Header
        as='h2'
        content='I like eggs.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <div>
        <a href="https://drive.google.com/file/d/15qxRNHvhRobXFZ_izpsey_lLUF26eG4r/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button inverted color='blue' size='huge'>
            View My Resume &nbsp;
            <i class="far fa-file"></i>
          </Button>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kevin-malazarte/" target="_blank" rel="noopener noreferrer">
          <i
            style={{
              fontSize: mobile ? '1.5em' : '3em',
              fontWeight: 'normal',
              padding: '.1em',
              marginTop: mobile ? '1em' : '2em'
              }}
            class="fab fa-linkedin">
          </i>
        </a>
        <a href="https://github.com/KMalazarte" target="_blank" rel="noopener noreferrer">
          <i
            class="fab fa-github-square"
            style={{
            fontSize: mobile ? '1.5em' : '3em',
            fontWeight: 'normal',
            padding: '.1em',
            marginTop: mobile ? '1em' : '2em'
            }}>
          </i>
        </a>
        <a href="https://medium.com/@KMalazarte" target="_blank" rel="noopener noreferrer">
          <i
            class="fab fa-medium"
            style={{
            fontSize: mobile ? '1.5em' : '3em',
            fontWeight: 'normal',
            padding: '.1em',
            marginTop: mobile ? '1em' : '2em'
            }}>
          </i>
        </a>
      </div>
    </Container>
  )}

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

export default HomepageHeading
