import React, { useState } from 'react';
import Link from 'next/link';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

const LeftNav = () => {
  const [menuItems, setMenuItems] = useState([
    { text: 'Home', icon: '', link: '/' },
    { text: 'Artists', icon: '', link: '/artists' },
    { text: 'Artworks', icon: '', link: '/artworks' },
    { text: 'Collective', icon: '', link: '/collective' },
    { text: 'Events', icon: '', link: '/events' },
  ])

  return (
    <Paper>
      <MenuList>
        {menuItems.map(item => { 
          return (
            <Link href={item.link} passHref>
              <MenuItem>{item.text}</MenuItem>
            </Link>
          )
        })}
      </MenuList>
    </Paper>
  );
};

export default LeftNav
