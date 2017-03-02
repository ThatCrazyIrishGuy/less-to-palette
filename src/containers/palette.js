
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import { Layout, Panel, Sidebar, IconButton } from 'react-toolbox';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ColourTile from '../components/colour-tile'

import styles from './palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
        sidebarPinned: false
    };
  }

  toggleSidebar() {
      this.setState({ sidebarPinned: !this.state.sidebarPinned });
  }

  render() {
      let tiles = [];
      if(this.props.palette.length > 0){
        tiles = this.props.palette[0].map(function(colour) {
          return (
            <Col xs={3} md={2}>
              <ColourTile key={colour.value} colour={colour.value} label={colour.key} />
            </Col>
          );
        });
      }
      return (
          <Layout>
            <Grid>
              <Row >
                {tiles}
              </Row>
            </Grid>
              <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                  <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                  <div style={{ flex: 1 }}>
                      <p>Supplemental content goes here.</p>
                  </div>
              </Sidebar>
          </Layout>
      );
    }
}

function mapStateToProps({ palette }) {
  return { palette };
}

export default connect(mapStateToProps)(Palette);
