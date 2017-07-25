/**
*
* LandingColumn
*
*/

import React, { PropTypes } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

function LandingColumn({ image, hovered, onMouseHover, message }) {
  return (
    <Grid.Column style={style.column} textAlign="justified" onMouseOver={() => { onMouseHover(); }}>
      <Header as="h3" textAlign="center" >
        {hovered ? (<FormattedMessage {... message} />) : (<div>&nbsp;</div>)
      }
      </Header>
      <Image src={image} style={style.img} centered />
    </Grid.Column>
  );
}
const style = {
  column: {
    maxHeight: '100%',
  },
  img: {
    borderRadius: '5px',
  },
};

LandingColumn.propTypes = {
};

export default LandingColumn;
