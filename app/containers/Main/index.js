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
import MenuInstrumental from '../../components/MenuInstrumental';
import { actToggleVisibility } from './actions';

export class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Sidebar.Pushable as={Segment} style={{ minHeight: '100vh' }}>
        <Sidebar as={Menu} animation="push" width="wide" visible={this.props.Main.sidebar} icon="labeled" vertical inverted>
          <MenuInstrumental handleItemClick={() => this.props.toggleVisibility(false)} />
          <MenuInstrumental handleItemClick={() => this.props.toggleVisibility(false)} />
          <MenuInstrumental handleItemClick={() => this.props.toggleVisibility(false)} />
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
};

const mapStateToProps = createStructuredSelector({
  Main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleVisibility: (payload) => (dispatch(actToggleVisibility(payload))),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
