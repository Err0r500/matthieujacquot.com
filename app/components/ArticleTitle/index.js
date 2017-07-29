/**
*
* ArticleTitle
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


function ArticleTitle({ text }) {
  return (
    <Card.Header>
      {text}
    </Card.Header>
  );
}

ArticleTitle.propTypes = {

};

export default ArticleTitle;
