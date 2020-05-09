import React from 'react';
import screenShot_1 from '../images/screenshot_1.png';
import screenShot_2 from '../images/screenshot_2.png';
import screenShot_3 from '../images/screenshot_3.png';
import {
  Image,
  Card,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import '../styles.css'

const ProjectCards = () => {
  return (
    <Segment className="Component" style={{ padding: '3em 0em' }} vertical>
      <Grid columns={3} equal width grid container stackable verticalAlign='middle'>
        <Grid.Row centered="true" >
          <Header as='h3' style={{ fontSize: '4em' }}>
            Projects
          </Header>
        </Grid.Row>
        <Card.Group itemsPerRow={3} centered={true} id="projects">
            <Card className="project-card" centered raised fluid>
              <Image class="img" src={screenShot_1} size="large"/>
              <Card.Content>
                <Card.Header textAlign="center">$pendy</Card.Header>
                <Card.Description>
                An easy way to keep track of expenses to prevent excessive spending
                </Card.Description>
                <br />
                <Card.Meta>
                  <span className='technology'>Built With: React & React Router, Redux, Rails, JWT Auth, Semantic UI React</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content textAlign="center" extra>
                <a href="https://github.com/KMalazarte/Mod_5_Money_Tracker/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github">&nbsp;</i>
                  Front End &nbsp;
                </a>
                | &nbsp;
                <a href="https://github.com/KMalazarte/spendy-api" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github">&nbsp;</i>
                  Back End &nbsp;
                </a>
                | &nbsp;
                <a href="https://www.youtube.com/watch?v=C_iWGRKRf5U&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-youtube">&nbsp;</i>
                  Demo
                </a>
              </Card.Content>
            </Card>
            <Card className="project-card" centered raised fluid>
              <a href="https://kevinsmoviereviewer.herokuapp.com/">
                <Image src={screenShot_2} class="img" size="large"/>
              </a>
              <Card.Content>
                <a href="https://kevinsmoviereviewer.herokuapp.com/" id="Title" target="_blank" rel="noopener noreferrer">
                  <Card.Header textAlign="center">MovieReviewer</Card.Header>
                </a>
                <Card.Description id="movie-desc">
                  A movie site where users can rate and review the newest movies<br/>
                </Card.Description>
                <br />
                <Card.Meta>
                  <span className='technology'>Built With: React & React Router, Rails, JWT Auth, React Bootstrap, The Movie Database API</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content textAlign="center" extra>
                <a href="https://github.com/KMalazarte/Mod_4_front_end" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github">&nbsp;</i>
                  Front End &nbsp;
                </a>
                | &nbsp;
                <a href="https://github.com/KMalazarte/Movie-Reviewer" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github">&nbsp;</i>
                  Back End &nbsp;
                </a>
                | &nbsp;
                <a href="https://www.youtube.com/watch?v=qEwOMaFb5vA" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-youtube">&nbsp;</i>
                  Demo
                </a>
              </Card.Content>
            </Card>
            <Card className="project-card" centered raised fluid>
              <Image src={screenShot_3} class="img" size="large" />
              <Card.Content>
                <Card.Header textAlign="center">Flex Buddy</Card.Header>
                <Card.Description>
                An exercise helper that shows how to perform exercises and what muscle groups are being affected
                </Card.Description>
                <br />
                <Card.Meta>
                  <span className='technology'>Built With: Vanilla Javascript, Rails, PostgreSQL, Custom CSS</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content textAlign="center" extra>
                <a href="https://github.com/KMalazarte/mod3_project_front_end" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github">&nbsp;</i>
                  Front End &nbsp;
                </a>
                | &nbsp;
                <a href="https://github.com/KMalazarte/mod3_project_back_end" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github">&nbsp;</i>
                  Back End &nbsp;
                </a>
                | &nbsp;
                <a href="https://www.youtube.com/watch?v=j9ZhmJBlkcI" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-youtube">&nbsp;</i>
                  Demo
                </a>
              </Card.Content>
            </Card>
        </Card.Group>
      </Grid>
    </Segment>
  )
}

export default ProjectCards
