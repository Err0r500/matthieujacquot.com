/*
 *
 * Main
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Header, Container, Grid, Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import makeSelectMain from './selectors';
import messages from './messages';

export class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    visible: false,
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation="push" width="wide" visible={this.props.Main.sidebar} icon="labeled" vertical inverted>
          <Menu.Item name="home">
            <Icon name="home" />
                Home
              </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
                Games
              </Menu.Item>
          <Menu.Item name="camera">
            <Icon name="camera" />
                Channels
              </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {React.Children.toArray(this.props.children)}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
