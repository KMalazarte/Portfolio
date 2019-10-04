import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Card,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Embed,
  Visibility
} from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
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
    <a href="https://drive.google.com/open?id=1tNPDLc4JwXyK5DKfnF9HJxc8KeJlYPr9">
      <Button primary size='huge'>
        View My Resume
        <i class="far fa-file"></i>
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/kevin-malazarte/">
      <i
        style={{
          fontSize: mobile ? '1.5em' : '3em',
          fontWeight: 'normal',
          padding: '.2em',
          marginTop: mobile ? '1em' : '2em'
          }}
        class="fab fa-linkedin">
      </i>
    </a>
    <a href="https://github.com/KMalazarte">
      <i
        class="fab fa-github-square"
        style={{
        fontSize: mobile ? '1.5em' : '3em',
        fontWeight: 'normal',
        padding: '.2em',
        marginTop: mobile ? '1em' : '2em'
        }}>
      </i>
    </a>
    <a href="https://medium.com/@KMalazarte">
      <i
        class="fab fa-medium"
        style={{
        fontSize: mobile ? '1.5em' : '3em',
        fontWeight: 'normal',
        padding: '.2em',
        marginTop: mobile ? '1em' : '2em'
        }}>
      </i>
    </a>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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

    let home = document.getElementById("home")

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

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

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
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
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
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle' >
        <Grid.Row id="projects">
            <Header textAlign="center" as='h3' style={{ fontSize: '4em' }}>
              Projects
            </Header>
        </Grid.Row>
        <Grid.Row>

            <ul>
                <Card>
                  <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header textAlign="center">$pendy</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      An easy way to keep track of expenses to prevent excessive spending
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://github.com/KMalazarte/Mod_5_Money_Tracker/" target="_blank">
                      <i class="fab fa-github">&nbsp;</i>
                      Front End &nbsp;
                    </a>
                    | &nbsp;
                    <a href="https://github.com/KMalazarte/spendy-api" target="_blank">
                      <i class="fab fa-github">&nbsp;</i>
                      Back End &nbsp;
                    </a>
                    | &nbsp;
                    <a href="https://www.youtube.com/watch?v=C_iWGRKRf5U&feature=youtu.be" target="_blank">
                      <i class="fab fa-youtube">&nbsp;</i>
                      Demo
                    </a>
                  </Card.Content>
                </Card>
            </ul>
            <ul>
                <Card>
                  <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header textAlign="center">MovieReviewer</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                    A movie site where users can rate and review the newest movies
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://github.com/KMalazarte/Mod_4_front_end" target="_blank">
                      <i class="fab fa-github">&nbsp;</i>
                      Front End &nbsp;
                    </a>
                    | &nbsp;
                    <a href="https://github.com/KMalazarte/Movie-Reviewer" target="_blank">
                      <i class="fab fa-github">&nbsp;</i>
                      Back End &nbsp;
                    </a>
                    | &nbsp;
                    <a href="https://www.youtube.com/watch?v=C_iWGRKRf5U&feature=youtu.be" target="_blank">
                      <i class="fab fa-youtube">&nbsp;</i>
                      Demo
                    </a>
                  </Card.Content>
                </Card>
            </ul>
            <ul>
                <Card>
                  <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header textAlign="center">Flex Buddy</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      An easy way to keep track of expenses to prevent excessive spending
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://github.com/KMalazarte/mod3_project_front_end" target="_blank">
                      <i class="fab fa-github">&nbsp;</i>
                      Front End &nbsp;
                    </a>
                    | &nbsp;
                    <a href="https://github.com/KMalazarte/mod3_project_back_end" target="_blank">
                      <i class="fab fa-github">&nbsp;</i>
                      Back End &nbsp;
                    </a>
                    | &nbsp;
                    <a href="https://www.youtube.com/watch?v=j9ZhmJBlkcI" target="_blank">
                      <i class="fab fa-youtube">&nbsp;</i>
                      Demo
                    </a>
                  </Card.Content>
                </Card>
            </ul>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header id="blogs" as='h3' style={{ fontSize: '2em' }}>
              Blogs
            </Header>
            <p style={{ fontSize: '1.33em' }}>BlogsBlogsBlogsBlogsBlogsBlogsBlogs</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header id="about me" as='h3' style={{ fontSize: '2em' }}>
          About Me
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          All this shit about me
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
