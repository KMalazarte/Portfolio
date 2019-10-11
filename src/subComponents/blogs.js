import React from 'react';
import {
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react'

const Blogs = () => {
  return(
    <Segment vertical>
      <Grid centered="true" columns='equal' stackable>
        <Grid.Row textAlign='center' style={{ padding:'1.7em'}}>
          <Header id="blogs" as='h3' style={{ fontSize: '4em' }}>
            <i class="fab fa-medium">
            </i>&nbsp;
            Technical Blogs
          </Header>
        </Grid.Row>
        <Grid.Row style={{ fontSize: '1.5em' }}>
          <a href="https://medium.com/@KMalazarte/the-machines-are-learning-3ea4bca2b66a" target="_blank" rel="noopener noreferrer">The Machines Are Learning</a>
        </Grid.Row>
        <Grid.Row style={{ fontSize: '1.5em' }}>
          <a href="https://medium.com/@KMalazarte/ruby-vs-javascript-f5d9ec9221a" target="_blank" rel="noopener noreferrer">Ruby vs Javascript</a>
        </Grid.Row>
        <Grid.Row style={{ fontSize: '1.5em' }}>
          <a href="https://medium.com/@KMalazarte/data-analytics-and-tech-in-the-nba-cb48084774f0" target="_blank" rel="noopener noreferrer">Data Analytics & the NBA</a>
        </Grid.Row>
        <Grid.Row style={{ fontSize: '1.5em' }}>
          <a href="https://medium.com/@KMalazarte/the-atom-packages-your-mama-warned-you-about-or-didnt-5f15d9e50801" target="_blank" rel="noopener noreferrer">My Favorite Atom Packages</a>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Blogs
