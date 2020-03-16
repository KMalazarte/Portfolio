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
      <Grid id="blogs" centered="true" columns='equal' stackable>
        <Grid.Row textAlign='center' id="blog-header">
          <Header as='h3' id="blogs-header-font">
            <i class="fab fa-medium">
            </i>&nbsp;
            Technical Blogs
          </Header>
        </Grid.Row>
        <List>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/ruby-vs-javascript-f5d9ec9221a" target="_blank" rel="noopener noreferrer">Ruby vs Javascript</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/the-atom-packages-your-mama-warned-you-about-or-didnt-5f15d9e50801" target="_blank" rel="noopener noreferrer">My Favorite Atom Packages</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/using-the-usestate-hook-in-reactjs-2321a9656761" target="_blank" rel="noopener noreferrer">Using the useState Hook in ReactJS</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/creating-my-personal-portfolio-site-5ee2c33b6fa" target="_blank" rel="noopener noreferrer">Creating My Personal Portfolio Site</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/my-first-technical-code-challenge-f188280973d1" target="_blank" rel="noopener noreferrer">My First Technical Code Challenge</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/revisiting-old-code-58b3d8d404c2" target="_blank" rel="noopener noreferrer">Revisiting Old Code</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/lifecycle-methods-with-reactjs-hooks-9126d6d535c5" target="_blank" rel="noopener noreferrer">Lifecycle Methods with ReactJS hooks</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/the-single-number-algorithm-problem-5b24831c2169" target="_blank" rel="noopener noreferrer">The Single Number Algorithm</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/first-unique-character-in-a-string-9708453176d9" target="_blank" rel="noopener noreferrer">First Unique Character in a String</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/redux-keywords-explained-c52cba54b561" target="_blank" rel="noopener noreferrer">Redux Keywords</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/promise-all-in-javascript-8d4fc8d07331" target="_blank" rel="noopener noreferrer">Promise.all() in javascript</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/best-time-to-buy-and-sell-stock-problem-i-699b81e56c38" target="_blank" rel="noopener noreferrer">Best Time to Buy and Sell Stock Problem I</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/valid-palindrome-ed4567292646" target="_blank" rel="noopener noreferrer">Valid Palindrome</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/contains-duplicate-algorithm-problem-15816cd4c0fc" target="_blank" rel="noopener noreferrer">Contains Duplicate Algorithm Problem</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/sets-in-javascript-9ad6df015a10" target="_blank" rel="noopener noreferrer">Sets in Javascript</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/digits-product-55811a99772a" target="_blank" rel="noopener noreferrer">Digits Product</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/house-robber-5776e17df0a1" target="_blank" rel="noopener noreferrer">House Robber Algorithm Problem</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/maps-in-javascript-13363b7b4de9" target="_blank" rel="noopener noreferrer">Maps in Javascript</a>}/>
         <List.Item className="blogs-items" content={<a href="https://medium.com/@KMalazarte/contains-duplicate-ii-8dc596a79717" target="_blank" rel="noopener noreferrer">Contains Duplicate II</a>}/>
       </List>
      </Grid>
    </Segment>

  )
}

export default Blogs
