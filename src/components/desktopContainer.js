import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from './homepageHeading.js';
import {
  Container,
  Visibility,
  Menu,
  Segment,
  Responsive
} from 'semantic-ui-react'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  clickHandler = (e) => {
    console.log(e.currentTarget.innerText.toLowerCase())
    document.getElementById(e.currentTarget.innerText.toLowerCase()).scrollIntoView({block: "center", behavior: "smooth"})
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    const getWidth = () => {
      const isSSR = typeof window === 'undefined'

      return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    }

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                  <Menu.Item name="menuHome" onClick={this.clickHandler} as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item onClick={this.clickHandler} as='a'>Projects</Menu.Item>
                  <Menu.Item onClick={this.clickHandler} as='a'>Blogs</Menu.Item>
                  <Menu.Item onClick={this.clickHandler} as='a'>About Me</Menu.Item>
                  <Menu.Item onClick={this.clickHandler} as='a'>Contact Me</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer
