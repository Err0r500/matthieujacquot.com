/**
*
* SubSectionTitle
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

function SectionTitle({ content }) {
  return (
    <Header as="h2" textAlign="center" className="column">
      {content}
    </Header>
  );
}

SectionTitle.propTypes = {

};

export default SectionTitle;
