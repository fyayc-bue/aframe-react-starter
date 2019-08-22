import 'aframe';
import 'aframe-animation-component';

import { Entity, Scene } from 'aframe-react';
import React from 'react';

import BaseLayer from './../../../Components/Layers/BaseLayer/BaseLayer';
import IsometricCamera from '../../Cameras/IsometricCamera/IsometricCamera';

export default class ViewerScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      collapsed: false,
      distance: {
        min: .2,
        max: 3,
      },
      centerY: 0,
    };
  }

  collapse() {
    this.setState({
      collapsed: true
    });
  }

  calculateOffset(level) {
    const distance = (this.state.collapsed) ? this.state.distance.min : this.state.distance.max
    const offset = level * distance;
    console.log(offset);
    return offset;
  }

  render() {

    return (
      <Scene vr-mode-ui='enabled: false'>
        <a-assets>
          {/* Asset have to be defined in the root aframe scene */}
        </a-assets>
        <Entity
          primitive='a-light'
          type='directional'
          color='#fff'
          position={{ x: -4.052, y: 10.436, z: 5.583 }}></Entity>

        <Entity
          text={{ value: 'Data Layer', align: 'center', color: '#000' }}
          position={{ x: 0, y: 0, z: 0 }}
          width='4' />

        <Entity id='explodedViewRoot'>

          <BaseLayer id='customersLayer' offset={this.calculateOffset(3)} opacity='0.5' color='lightblue' />

          <BaseLayer id='experienceLayer' offset={this.calculateOffset(2)} color='turquoise' />

          <BaseLayer id='organisationLayer' offset={this.calculateOffset(1)} color='lightgreen' />

          <BaseLayer id='performanceLayer' offset={this.calculateOffset(0)} color='yellow' />

          <BaseLayer id='assetLayer' offset={this.calculateOffset(-1)} uniformScale='1.1' color='orange' />

          <BaseLayer id='dataLayer' offset={this.calculateOffset(-2)} color='red' />

        </Entity>

        <IsometricCamera />

      </Scene>
    );
  }
}
