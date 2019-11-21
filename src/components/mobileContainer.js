import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from './homepageHeading.js';
import {
  Container,
  Menu,
  Segment,
  Responsive,
  Sidebar,
  Icon,
  Button
} from 'semantic-ui-react'

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  clickHandler = (e) => {
    console.log(e.currentTarget.innerText.toLowerCase())
    document.getElementById(e.currentTarget.innerText.toLowerCase()).scrollIntoView({block: "center", behavior: "smooth"})
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    const getWidth = () => {
      const isSSR = typeof window === 'undefined'

      return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    }

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item onClick={this.clickHandler} as='a'>Projects</Menu.Item>
          <Menu.Item onClick={this.clickHandler} as='a'>Blogs</Menu.Item>
          <Menu.Item onClick={this.clickHandler} as='a'>About Me</Menu.Item>
          <Menu.Item onClick={this.clickHandler} as='a'>Contact Me</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}
export default MobileContainer
