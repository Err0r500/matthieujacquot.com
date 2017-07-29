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
    <Card.Description style={{paddingTop:'10px'}}>
      <div dangerouslySetInnerHTML={{__html: text}}></div>
    </Card.Description>
  );
}

ArticleBody.propTypes = {

};

export default ArticleBody;
