import React from 'react';
import ResponsiveContainer from './responsiveContainer.js'
import ProjectCards from '../subComponents/projectCards.js'
import Blogs from '../subComponents/blogs.js'
import AboutMe from '../subComponents/aboutMe.js'
import Footer from '../subComponents/footer.js'


const HomepageLayout = () => {
  return(
  <ResponsiveContainer>
    <ProjectCards />
    <Blogs />
    <AboutMe />
    <Footer />
  </ResponsiveContainer>
)}

export default HomepageLayout
