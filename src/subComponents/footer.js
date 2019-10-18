import React from 'react';
import {
  Segment,
  Grid,
  List,
  Container,
  Header
} from 'semantic-ui-react'

const Footer = () => {
  return(

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Contact Me</List.Item>
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
              <i class="fas fa-copyright"></i>
                &nbsp;2019 Copyright Kevin Malazarte
              </Header>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
