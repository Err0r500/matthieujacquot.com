/**
*
* MenuInstrumental
*
*/

import React from 'react';
import { Menu } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MenuInstrumental({ activeItem, handleItemClick }) {
  const menuItems = [
    { key: 'repertoir', mess: { ...messages.menu2 } },
    { key: 'videos', mess: { ...messages.menu3 } },
    { key: 'discography', mess: { ...messages.menu4 } },
    { key: 'pedagogy', mess: { ...messages.menu5 } },
  ];

  const getItems = () => menuItems.map((item, key) => {
    const path = `instrumental/${item.key}`;
    return (
      <Menu.Item key={key} name={item.key} active={activeItem === path} onClick={() => handleItemClick(item.key, <FormattedMessage {...item.mess} />)}>
        <FormattedMessage {...item.mess} />
      </Menu.Item>);
  });

  return (
    <Menu.Item>
      <FormattedMessage {...messages.header} />
      <Menu.Menu>
        {getItems()}
      </Menu.Menu>
    </Menu.Item>
  );
}

MenuInstrumental.propTypes = {

};

export default MenuInstrumental;
