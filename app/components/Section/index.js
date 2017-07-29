/**
*
* Section
*
*/

import React from 'react';
// import styled from 'styled-components';
import Article from '../../components/Article';
import SectionTitle from '../../components/SectionTitle';


function Section({sectionKey, articles, title, activeArticle, handleClick}) {
const getArticles = (articles) => articles.map((article, key) => (
  <Article
    key={key}
    article={article}
    handleClick={() => handleClick(key, sectionKey)}
    active={activeArticle.key === key && activeArticle.sectionKey === sectionKey}
  />
))
  return (
    <div className="column">
    <SectionTitle content={title} />
    {getArticles(articles)}
    </div>
  );
}

Section.propTypes = {

};

export default Section;
