import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = (props) => {


  return(

    <div>
      <Link to='/' class="button">All Cereals</Link> | <BackButton/>

      {props.children}
    </div>
  )
}

export default NavBar;
