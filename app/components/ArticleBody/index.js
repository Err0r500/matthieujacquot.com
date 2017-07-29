/**
*
* ArticleBody
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


function ArticleBody({ text }) {
  return (
    <Card.Description>
      {text}
    </Card.Description>
  );
}

ArticleBody.propTypes = {

};

export default ArticleBody;
