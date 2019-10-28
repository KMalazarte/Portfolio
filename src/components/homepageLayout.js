import React from 'react';
import ResponsiveContainer from './responsiveContainer.js'
import ProjectCards from '../subComponents/projectCards.js'
import Blogs from '../subComponents/blogs.js'
import AboutMe from '../subComponents/aboutMe.js'
import MyForm from '../subComponents/myForm.js'
import Footer from '../subComponents/footer.js'
import '../App.css'


const HomepageLayout = () => {
  return(
  <ResponsiveContainer>
    <ProjectCards />
    <Blogs />
    <AboutMe />
    <MyForm />
    <Footer />
  </ResponsiveContainer>
)}

export default HomepageLayout
