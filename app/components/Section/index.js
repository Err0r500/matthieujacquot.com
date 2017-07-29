/**
*
* Section
*
*/

import React from 'react';
// import styled from 'styled-components';
import Article from '../../components/Article';
import SectionTitle from '../../components/SectionTitle';


function Section({articles, title, activeArticle}) {
const getArticles = (articles) => articles.map((article, key) => (
  <Article
    key={key}
    article={article}
    handleClick={() => { this.props.setActiveArticle(key); }}
    active={activeArticle === key}
  />
))
  return (
    <div>
    <SectionTitle content={title} />
    {getArticles(articles)}
    </div>
  );
}

Section.propTypes = {

};

export default Section;
