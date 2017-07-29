/*
 *
 * Main
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import { Header, Container, Grid, Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import makeSelectMain from './selectors';
import messages from './messages';
import MenuInstrumental from '../../components/MenuInstrumental';
import { actToggleVisibility, actCurrentSectionName } from './actions';

export class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleMenuClick = (e, sectionName, basePath) => {
    this.props.setCurrentSectionName(sectionName);
    this.props.toggleVisibility(!this.props.Main.sidebar);
    this.props.router.push(`/${basePath}/${e}`);
  }

  getIcon = () => this.props.Main.sidebar ? 'angle double left' : 'angle double right'

  render() {
    return (
      <Sidebar.Pushable as={Segment} style={{ minHeight: '100vh' }}>
        <Sidebar as={Menu} animation="push" width="wide" visible={this.props.Main.sidebar} icon="labeled" vertical inverted>

          <MenuInstrumental handleItemClick={(e, f) => this.handleMenuClick(e, f, 'instrumental')} activeItem={this.props.params.chapter} />
          <MenuInstrumental handleItemClick={(e, f) => this.handleMenuClick(e, f, 'instrumental')} />
          <MenuInstrumental handleItemClick={(e, f) => this.handleMenuClick(e, f, 'instrumental')} />
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>

            <Button floated="left" icon={this.getIcon()} secondary onClick={() => this.props.toggleVisibility(!this.props.Main.sidebar)}></Button>

            <Container> {React.Children.toArray(this.props.children)} </Container>

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

Main.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  Main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleVisibility: (payload) => (dispatch(actToggleVisibility(payload))),
    setCurrentSectionName: (payload) => (dispatch(actCurrentSectionName(payload))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
