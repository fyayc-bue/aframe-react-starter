import 'aframe';
import 'aframe-animation-component';

import { Entity, Scene } from 'aframe-react';
import React from 'react';

import BaseLayer from './../../../Components/Layers/BaseLayer/BaseLayer';

export default class ViewerScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <Scene vr-mode-ui="enabled: false">
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
        </a-assets>

        <Entity
          primitive='a-light'
          type='directional'
          color='#fff'
          position={{ x: -4.052, y: 10.436, z: 5.583 }}></Entity>
        {/* <Entity primitive="a-light" type="ambient" color="#fff"/> */}
        {/* <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        {/* <Entity primitive="a-sky" height="2048" radius="100" src="#skyTexture" theta-length="90" width="2048"/> */}

      <Entity
          text={{ value: 'Data Layer', align: 'center', color: '#000' }}
          position={{ x: 0, y: 0, z: 0 }}
          width='4' />

        <Entity id="explodedViewRoot">
          
          <BaseLayer id="dataLayer" offset='-10'/>

          <BaseLayer id="assetLayer" offset='-5'/>

          <BaseLayer id="performanceLayer" offset='0'/>

          <BaseLayer id="organisationLayer" offset='5'/>
        
          <BaseLayer id="customersLayer" offset='10'/>

        </Entity>


        <Entity id="rig" position={{ x: 120, y: 120, z: 120 }} >
          <Entity primitive="a-camera"
            fov={10} camera={{ userHeight: 0 }}
            position={{ x: 0, y: 0, z: 0 }}
            rotation={{ x: -35, y: 45, z: 0 }}
            look-controls="enabled: false; hmdEnabled: false">
            {/* <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/> */}
          </Entity>
        </Entity>
      </Scene>
    );
  }
}
