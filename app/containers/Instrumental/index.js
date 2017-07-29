/*
 *
 * Instrumental
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectInstrumental from './selectors';
import messages from './messages';
import Article from '../../components/Article';
import { actSetActiveArticle } from './actions';
export class Instrumental extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getInstrumentalContent = () => this.props.Instrumental.articles.map((article, key) => (
    <Article
      key={key}
      article={article}
      handleClick={() => { this.props.setActiveArticle(key); }}
      active={this.props.Instrumental.activeArticle === key}
    />
  ));

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        {this.getInstrumentalContent()}
      </div>
    );
  }
}

Instrumental.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  Instrumental: makeSelectInstrumental(),
});

function mapDispatchToProps(dispatch) {
  return {
    setActiveArticle: (payload) => (dispatch(actSetActiveArticle(payload))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instrumental);
