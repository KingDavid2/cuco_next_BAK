import React, { useState } from 'react';
import Link from 'next/link';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

const LeftNav = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, text: 'Home', icon: '', link: '/' },
    { id: 2, text: 'Artists', icon: '', link: '/artists' },
    { id: 3, text: 'Artworks', icon: '', link: '/artworks' },
    { id: 4, text: 'Collective', icon: '', link: '/collective' },
    { id: 5, text: 'Events', icon: '', link: '/events' },
  ])

  return (
    <Paper>
      <MenuList>
        {menuItems.map(item => { 
          return (
            <Link key={item.id} href={item.link} passHref>
              <MenuItem>{item.text}</MenuItem>
            </Link>
          )
        })}
      </MenuList>
    </Paper>
  );
};

export default LeftNav
