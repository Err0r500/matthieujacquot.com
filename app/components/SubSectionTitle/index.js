/**
*
* SubSectionTitle
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

function SubSectionTitle({ content }) {
  return (
    <Header as="h2" textAlign="center" className="column">
      {content}
    </Header>
  );
}

SubSectionTitle.propTypes = {

};

export default SubSectionTitle;
