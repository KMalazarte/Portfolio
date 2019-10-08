import React, { Fragment, useState } from 'react';
import { Menu, Button, Card, Image, Icon } from 'semantic-ui-react'

const Nav = () => {
  // const greeting = "Hello World"

  const [activeItem, setActiveItem] = useState("")

  const menuHandler = (name) => {
    setActiveItem(name)
  }

  return (
    <Fragment>
      <Card>
         <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
         <Card.Content>
           <Card.Header>Matthew</Card.Header>
           <Card.Meta>
             <span className='date'>Joined in 2015</span>
           </Card.Meta>
           <Card.Description>
             Matthew is a musician living in Nashville.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <a>
             <Icon name='user' />
             22 Friends
           </a>
         </Card.Content>
       </Card>
    <Menu vertical>
         <Menu.Item
           name='projects'
           onClick={menuHandler}
         >
           Projects
         </Menu.Item>

         <Menu.Item
           name='blogs'
           active={activeItem === 'blogs'}
           onClick={menuHandler}
         >
           Blogs
         </Menu.Item>

         <Menu.Item
           name='about'
           active={activeItem === 'about'}
           onClick={menuHandler}
         >
           About Me
         </Menu.Item>
       </Menu>
       <Button> Click Here </Button>
       </Fragment>
  )
}

export default Nav
