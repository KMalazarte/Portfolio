import React from 'react';
import {
  Segment,
  Header,
  Container,
  Divider,
  Grid,
  List
} from 'semantic-ui-react'

const AboutMe = () => {
  return(
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          About Me
        </Header>
        <p style={{ fontSize: '1em' }}>
          Full stack web developer with a passion for creating user friendly applications that simplify peoples’ lives. With
          experience in Ruby on Rails, JavaScript, and React.js and a background in commercial insurance, I discovered
          web development through my curiosity of how modern technology works. By possessing strong skills in project
          management and team building I can get the most from my team and deliver a functional project on schedule.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p id="about me">Skills</p>
        </Divider>
        <Grid columns={3} divided>
         <Grid.Row>
           <Grid.Column>
            <Header textAlign="center">
              Languages
            </Header>
              <List>
                <List.Item>
                  <List.Header>Programming:</List.Header>
                    <List.List>
                      <List.Item>Javascript</List.Item>
                      <List.Item>Ruby</List.Item>
                    </List.List>
                </List.Item>
                <List.Item>
                  <List.Header>Markup:</List.Header>
                    <List.List>
                      <List.Item>HTML5</List.Item>
                      <List.Item>CSS</List.Item>
                    </List.List>
                </List.Item>
                <List.Item>
                  <List.Header>Database:</List.Header>
                    <List.List>
                      <List.Item>SQL</List.Item>
                    </List.List>
                </List.Item>
                <List.Item>
                  <List.Header>Version Control:</List.Header>
                    <List.List>
                      <List.Item>Git</List.Item>
                    </List.List>
                </List.Item>
              </List>
           </Grid.Column>
           <Grid.Column>
             <Header textAlign="center">
               Libraries & Frameworks
             </Header>
               <List>
                 <List.Item>React</List.Item>
                 <List.Item>Rails</List.Item>
                 <List.Item>Semantic UI</List.Item>
                 <List.Item>Bootstrap</List.Item>
                 <List.Item>Materialize</List.Item>
               </List>
           </Grid.Column>
           <Grid.Column>
             <Header textAlign="center">
              Interests
             </Header>
               <List>
                 <List.Item>Fitness</List.Item>
                 <List.Item>Travel</List.Item>
                 <List.Item>Food</List.Item>
                 <List.Item>Basketball</List.Item>
                 <List.Item>Reading</List.Item>
                 <List.Item>Board Gaming</List.Item>
               </List>
           </Grid.Column>
         </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default AboutMe
