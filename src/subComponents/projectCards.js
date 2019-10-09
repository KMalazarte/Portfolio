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

const ProjectCards = () => {
  return (
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid columns={3} equal width grid container stackable verticalAlign='middle'>
        <Grid.Row centered="true" id="projects">
          <Header as='h3' style={{ fontSize: '4em' }}>
            Projects
          </Header>
        </Grid.Row>
        <Grid.Row centered={true}>
          <Grid.Column>
            <Card centered raised fluid>
              <Image src={screenShot_1} wrapped ui={false} />
              <Card.Content>
                <Card.Header textAlign="center">$pendy</Card.Header>
                <Card.Description>
                An easy way to keep track of expenses to prevent excessive spending
                </Card.Description>
                <Card.Meta>
                  <span className='technology'>React & React Router, Redux, Rails, JWT Auth, Semantic UI React</span>
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
          </Grid.Column>
          <Grid.Column>
            <Card centered raised fluid>
              <Image src={screenShot_2} wrapped ui={false} />
              <Card.Content>
                <Card.Header textAlign="center">MovieReviewer</Card.Header>
                <Card.Description>
                A movie site where users can rate and review the newest movies
                </Card.Description>
                <Card.Meta>
                  <span className='technology'>Joined in 2015</span>
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
                <a href="https://www.youtube.com/watch?v=C_iWGRKRf5U&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-youtube">&nbsp;</i>
                  Demo
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
          <Card centered raised fluid>
            <Image src={screenShot_3} wrapped ui={false} />
            <Card.Content>
              <Card.Header textAlign="center">Flex Buddy</Card.Header>
              <Card.Description>
              An easy way to keep track of expenses to prevent excessive spending
              </Card.Description>
              <Card.Meta>
                <span className='technology'>Joined in 2015</span>
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
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProjectCards