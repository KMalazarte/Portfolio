import React from 'react';
// import screenShot_1 from '../images/screenshot_1.png';
// import screenShot_2 from '../images/screenshot_2.png';
// import screenShot_3 from '../images/screenshot_3.png';
import ResponsiveContainer from './responsiveContainer.js'
import ProjectCards from '../subComponents/projectCards.js'
import Blogs from '../subComponents/blogs.js'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => {
  return(
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid equal width grid container stackable verticalAlign='middle' >
        <Grid.Row centered="true" id="projects">
            <Header as='h3' style={{ fontSize: '4em' }}>
              Projects
            </Header>
        </Grid.Row>
        <Grid.Row columns="three">
          <ProjectCards />
        </Grid.Row>
      </Grid>
    </Segment>

    <Blogs />

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header id="about me" as='h3' style={{ fontSize: '2em' }}>
          About Me
        </Header>
        <p style={{ fontSize: '1em' }}>
          Full stack web developer with a passion for creating user friendly applications that simplify peoples’ lives. With
          experience in Ruby on Rails, JavaScript, and React.js and a background in commercial insurance, I discovered
          web development through my curiosity of how modern technology works. By possessing strong skills in project
          management and team building I can get the most from my team and deliver a functional project on schedule.
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
          <a href='hayBale'>Case Studies</a>
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
)}

export default HomepageLayout
