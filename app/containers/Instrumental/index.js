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
import messagesMenu from '../../components/MenuInstrumental/messages';
import { actSetActiveArticle } from './actions';
import Article from '../../components/Article';
import PageHeader from '../../components/PageHeader';
import ChapterTitle from '../../components/ChapterTitle';
import Section from '../../components/Section';
import { actToggleVisibility, actCurrentSectionName } from '../../containers/Main/actions';
import makeSelectMain from '../Main/selectors';


export class Instrumental extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.setCurrentSectionName(<FormattedMessage {...messagesMenu.menu2} />);
  }

  getInstrumentalContent = (chapters) =>
  this.props.Instrumental.articles[chapters || 'repertoir']
  .map((chapter, key) => (
    <Section
      key={key}
      sectionKey={key}
      articles={chapter.articles}
      title={chapter.title}
      activeArticle={this.props.Instrumental.activeArticle}
      handleClick={(key, sectionKey) => this.props.setActiveArticle({ key, sectionKey })}
    />))

  render() {
    return (
      <Grid columns={1} >
        <PageHeader
          content={<FormattedMessage {...messages.header} />}
        />

        <ChapterTitle content={this.props.Main.currentChapter} />

        {this.getInstrumentalContent(this.props.params.chapter)}
      </Grid>
    );
  }
}

Instrumental.propTypes = {};

const mapStateToProps = createStructuredSelector({
  Instrumental: makeSelectInstrumental(),
  Main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    setCurrentSectionName: (payload) => (dispatch(actCurrentSectionName(payload))),
    setActiveArticle: (payload) => (dispatch(actSetActiveArticle(payload))),
    toggleVisibility: (payload) => (dispatch(actToggleVisibility(payload))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instrumental);
