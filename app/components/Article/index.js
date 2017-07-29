/**
*
* Article
*
*/

import React from 'react';
// import styled from 'styled-components';
import ArticleTitle from '../ArticleTitle';
import ArticleBody from '../ArticleBody';
import { Card, Button } from 'semantic-ui-react';

function Article({ article, handleClick, active }) {
  const getIcon = () => active ? 'compress' : 'expand';

  return (
    <Card fluid>
      <Card.Content>
        <ArticleTitle text={article.title} />
        <Button circular icon={getIcon()} toggle active={active} onClick={handleClick} />
        <br />
        {active &&
          <ArticleBody text={article.body} />
        }

      </Card.Content>
    </Card>
  );
}

Article.propTypes = {

};

export default Article;
