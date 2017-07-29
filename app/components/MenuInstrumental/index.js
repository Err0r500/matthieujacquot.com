/**
*
* MenuInstrumental
*
*/

import React from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MenuInstrumental({ activeItem, handleItemClick }) {
  // <Menu.Item name="search" active={activeItem === 'search'} onClick={handleItemClick}>
  //   <FormattedMessage {...messages.menu1} />
  // </Menu.Item>
  return (
    <Menu.Item>
      <FormattedMessage {...messages.header} />
      <Menu.Menu>
        <Menu.Item name="add" active={activeItem === 'add'} onClick={handleItemClick}>
          <FormattedMessage {...messages.menu2} />
        </Menu.Item>
        <Menu.Item name="about" active={activeItem === 'about'} onClick={handleItemClick}>
          <FormattedMessage {...messages.menu3} />
        </Menu.Item>
        <Menu.Item name="about" active={activeItem === 'about'} onClick={handleItemClick}>
          <FormattedMessage {...messages.menu4} />
        </Menu.Item>
        <Menu.Item name="about" active={activeItem === 'about'} onClick={handleItemClick}>
          <FormattedMessage {...messages.menu5} />
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
  );
}

MenuInstrumental.propTypes = {

};

export default MenuInstrumental;
