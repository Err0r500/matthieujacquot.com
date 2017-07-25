/*
 *
 * Landing
 *
 */

import React, { PropTypes } from 'react';
import { Header, Container, Grid, Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLanding from './selectors';
import messages from './messages';
import instrumental from './assets/instrumental.jpg';
import composition from './assets/compo.jpg';
import visual from './assets/visual.jpg';
import code from './assets/code.jpg';
import LandingColumn from '../../components/LandingColumn';

import { actToggleVisibility } from '../../containers/Main/actions';

export class Landing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    images: [
        { src: instrumental, mess: { ...messages.instrumental }, hovered: true },
        { src: composition, mess: { ...messages.composition }, hovered: false },
        { src: visual, mess: { ...messages.visual }, hovered: false },
        { src: code, mess: { ...messages.code }, hovered: false },
    ],
  };

  getImages = () => this.state.images.map((image, key) => (
    <LandingColumn key={key} image={image.src} hovered={image.hovered} onMouseHover={() => { this.hover(key); }} message={image.mess} />
  ))

  hover = (key) => {
    this.state.images.map((image, imgkey) => { imgkey === key ? image.hovered = true : image.hovered = false; return false; });
    this.forceUpdate();
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" >
          <Button onClick={() => {this.props.toggleVisibility(false)}}>Toggle Visibility</Button>
          <FormattedMessage {...messages.header} />
        </Header>
        <Grid centered verticalAlign="middle" style={{ height: 'calc(100vh - 100px)' }}>
          <Grid.Row columns={4}>
            {this.getImages()}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

Landing.propTypes = {};

const mapStateToProps = createStructuredSelector({
  landing: makeSelectLanding(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleVisibility:  (payload) => (dispatch(actToggleVisibility(payload))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
