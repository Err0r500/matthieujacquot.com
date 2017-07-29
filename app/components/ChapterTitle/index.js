/**
*
* SectionTitle
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Header } from 'semantic-ui-react';

function ChapterTitle({ content }) {
  return (
    <Header as="h3" textAlign="center" className="column">
      {content || '_'}
    </Header>
  );
}

ChapterTitle.propTypes = {

};

export default ChapterTitle;
