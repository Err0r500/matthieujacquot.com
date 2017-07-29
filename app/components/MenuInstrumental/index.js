/**
*
* MenuInstrumental
*
*/

import React from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MenuInstrumental({activeItem, handleItemClick}) {
  return (
    <Menu.Item>
         Home
         <Menu.Menu>
           <Menu.Item name='search' active={activeItem === 'search'} onClick={handleItemClick}>
             Search
           </Menu.Item>
           <Menu.Item name='add' active={activeItem === 'add'} onClick={handleItemClick}>
             Add
           </Menu.Item>
           <Menu.Item name='about' active={activeItem === 'about'} onClick={handleItemClick}>
             Remove
           </Menu.Item>
         </Menu.Menu>
       </Menu.Item>
  );
}

MenuInstrumental.propTypes = {

};

export default MenuInstrumental;
