import React from 'react';
import {
  Container
} from 'semantic-ui-react'

const HeaderIcons = ({ mobile }) => {
  return(
    <Container>
      <div class="icon-div">
        <a href="https://www.linkedin.com/in/kevin-malazarte/" target="_blank" rel="noopener noreferrer">
          <i
            style={{
              fontSize: mobile ? '1.5em' : '3em',
              fontWeight: 'normal',
              padding: '.1em',
              marginTop: mobile ? '0.3em' : '0.2em',
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
            marginTop: mobile ? '0.3em' : '0.2em',
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
            marginTop: mobile ? '0.3em' : '0.2em',
            }}>
          </i>
        </a>
      </div>
    </Container>
  )
}

export default HeaderIcons
