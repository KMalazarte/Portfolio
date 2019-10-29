import React from 'react';
import {
  Segment,
  Grid,
  Header,
  List
} from 'semantic-ui-react'
import '../styles.css'

const Blogs = () => {
  return(
    <Segment id="blog-segment" vertical>
      <Grid centered="true" columns='equal' stackable>
        <Grid.Row textAlign='center' id="blog-header">
          <Header as='h3' style={{ fontSize: '4em' }}>
            <i class="fab fa-medium">
            </i>&nbsp;
            Technical Blogs
          </Header>
        </Grid.Row>
        <List>
         <List.Item className="blogs" content={<a href='https://medium.com/@KMalazarte/the-machines-are-learning-3ea4bca2b66a" target="_blank" rel="noopener noreferrer'>The Machines Are Learning</a>}/>
         <List.Item className="blogs" content={<a href="https://medium.com/@KMalazarte/ruby-vs-javascript-f5d9ec9221a" target="_blank" rel="noopener noreferrer">Ruby vs Javascript</a>}/>
         <List.Item className="blogs" content={<a href="https://medium.com/@KMalazarte/data-analytics-and-tech-in-the-nba-cb48084774f0" target="_blank" rel="noopener noreferrer">Data Analytics & the NBA</a>}/>
         <List.Item className="blogs" content={<a href="https://medium.com/@KMalazarte/the-atom-packages-your-mama-warned-you-about-or-didnt-5f15d9e50801" target="_blank" rel="noopener noreferrer">My Favorite Atom Packages</a>}/>
         <List.Item className="blogs" content={<a href="https://medium.com/@KMalazarte/using-the-usestate-hook-in-reactjs-2321a9656761" target="_blank" rel="noopener noreferrer">Using the useState Hook in ReactJS</a>}/>
         <List.Item className="blogs" content={<a href="https://medium.com/@KMalazarte/creating-my-personal-portfolio-site-5ee2c33b6fa" target="_blank" rel="noopener noreferrer">Creating My Personal Portfolio Site</a>}/>
       </List>
      </Grid>
    </Segment>

  )
}

export default Blogs
