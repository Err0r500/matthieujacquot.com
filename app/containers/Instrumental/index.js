/*
 *
 * Instrumental
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Grid } from 'semantic-ui-react';
import makeSelectInstrumental from './selectors';
import messages from './messages';
import { actSetActiveArticle } from './actions';
import Article from '../../components/Article';
import PageHeader from '../../components/PageHeader';
import SectionTitle from '../../components/SectionTitle';
import { actToggleVisibility } from '../../containers/Main/actions';
import makeSelectMain from '../Main/selectors';

export class Instrumental extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getInstrumentalContent = (section) =>
  this.props.Instrumental.articles
  .filter((article) => article.section === section)
  .map((article, key) => (
    <Article
      key={key}
      article={article}
      handleClick={() => { this.props.setActiveArticle(key); }}
      active={this.props.Instrumental.activeArticle === key}
    />
  ));

  render() {
    return (
      <Grid columns={1} >
        <PageHeader
          handleClick={() => this.props.toggleVisibility(!this.props.Main.sidebar)}
          content={<FormattedMessage {...messages.header} />}
          sidebarOpen={this.props.Main.sidebar}
        />

        <SectionTitle content={this.props.Main.currentSection} />

        {this.getInstrumentalContent(this.props.params.section)}
      </Grid>
    );
  }
}

Instrumental.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  Instrumental: makeSelectInstrumental(),
  Main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    setActiveArticle: (payload) => (dispatch(actSetActiveArticle(payload))),
    toggleVisibility: (payload) => (dispatch(actToggleVisibility(payload))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instrumental);
