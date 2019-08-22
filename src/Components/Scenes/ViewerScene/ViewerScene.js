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
    };
  }

  collapse() {
    this.setState({
      collapsed: true
    });
  }

  render() {
    return (
      <Scene vr-mode-ui="enabled: false">
        <a-assets>
          <img id="groundTexture" alt='asset' src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
          <img id="skyTexture" alt='asset' src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
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

        <Entity id="explodedViewRoot">

          <BaseLayer id="dataLayer" offset='-10' />

          <BaseLayer id="assetLayer" offset='-5'/>

          <BaseLayer id="performanceLayer" offset='0'/>

          <BaseLayer id="organisationLayer" offset='5'/>

          <BaseLayer id="customersLayer" offset='10'/>

        </Entity>

        <IsometricCamera />

      </Scene>
    );
  }
}
