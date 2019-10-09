import React from 'react';
import screenShot_1 from '../images/screenshot_1.png';
import screenShot_2 from '../images/screenshot_2.png';
import screenShot_3 from '../images/screenshot_3.png';
import {
  Image,
  Card,
  Grid
} from 'semantic-ui-react'

const ProjectCards = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Card raised>
          <Image src={screenShot_1} wrapped ui={false} />
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
        <Card raised>
          <Image src={screenShot_2} wrapped ui={false} />
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

      <Card raised>
        <Image src={screenShot_3} wrapped ui={false} />
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
    </Grid.Row>
  )
}

export default ProjectCards
