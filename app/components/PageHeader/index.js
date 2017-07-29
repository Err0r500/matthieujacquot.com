/**
*
* PageHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Header, Button } from 'semantic-ui-react';
function PageHeader({ content}) {

  return (
    <div className="column">
      <Header floated="right" as="h1" >
        {content}
      </Header>
    </div>
  );
}

PageHeader.propTypes = {

};

export default PageHeader;
