import React from 'react';
import '../styles.css'
import {
  Segment,
  Grid,
  Container,
  Header
} from 'semantic-ui-react'

const Footer = () => {
  return(
    <Segment inverted vertical id="footer-segment">
      <Container>
        <Grid inverted stackable>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as='h4' inverted>
              <i class="fas fa-copyright"></i>
                &nbsp;2019 Copyright Kevin Malazarte
              </Header>
              <div>
                <a className="footer-icons" href="https://www.linkedin.com/in/kevin-malazarte/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"> </i>
                </a>
                <a className="footer-icons" href="https://github.com/KMalazarte" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github-square"> </i>
                </a>
                <a className="footer-icons" href="https://medium.com/@KMalazarte" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-medium"> </i>
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
