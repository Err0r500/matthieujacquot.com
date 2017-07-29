/**
*
* PageHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Header, Button } from 'semantic-ui-react';
function PageHeader({ content, handleClick, sidebarOpen}) {
  const getIcon = () => sidebarOpen ? "angle double left" : "angle double right"

  return (
    <div className="column">
      <Button floated="left" icon={getIcon()} secondary onClick={handleClick}></Button>
      <Header floated="right" as="h1" >
        {content} 
      </Header>
    </div>
  );
}

PageHeader.propTypes = {

};

export default PageHeader;
