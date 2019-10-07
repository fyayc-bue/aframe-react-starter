// Aframe
import 'aframe';
import 'aframe-animation-component';

// Aframe Components
import './../../../Entities/Line.js';
import './../../../Entities/Sprite.js';

// Framework
import React, { useState, useContext } from 'react';

// React Components
import BaseLayer from './../../../Components/Layers/BaseLayer/BaseLayer';
import IsometricCamera from '../../Cameras/IsometricCamera/IsometricCamera';

import { InspectorDispatch } from "../../Dispatch/InspectorDispatch";

const ViewerScene = (props) => {

  const [color, setColor] = useState('red');
  const [collapsed, setCollapsed] = useState(false);
  const [distance, setDistance] = useState({ min: .2, max: 3 });
  const [centerY, setCenterY] = useState(0);

  const collapse = () =>
    setCollapsed(true);


  const calculateOffset = (level) => {
    const newDistance = (collapsed) ? distance.min : distance.max;
    let offset = level * newDistance;
    return offset;
  }

  const { state, dispatch } = useContext(InspectorDispatch);

  return (
    <a-scene
      renderer="antialias: true; colorManagement: true; sortObjects: true; physicallyCorrectLights: true; alpha: false; webgl2: true; multiview: false;"
      shadow="type: pcfsoft"
      vr-mode-ui="enabled: false">

      {/* <a-entity line="path: 10 10 10, 0 0 0, -10 -10 -10" /> */}

      <a-entity
        primitive="a-light"
        type="directional"
        color="#fff"
        position="-4.052 10.436 5.583"
      />

      <a-entity id="explodedViewRoot">
        <BaseLayer
          id="customersLayer"
          offset={calculateOffset(3)}
          name='customers'
          color="lightblue"
          className="clickable"
        />
        <BaseLayer
          id="experienceLayer"
          name='experience'
          offset={calculateOffset(2)}
          color="turquoise"
        />
        <BaseLayer
          id="organisationLayer"
          name='organisation'
          offset={calculateOffset(1)}
          color="lightgreen"
        />
        <BaseLayer
          id="performanceLayer"
          name='performance'
          offset={calculateOffset(0)}
          color="yellow"
        />
        <BaseLayer
          id="assetLayer"
          name='asset'
          offset={calculateOffset(-1)}
          color="orange"
        />
        <BaseLayer
          id="dataLayer"
          name='data'
          offset={calculateOffset(-2)}
          color="red"
        />
      </a-entity>
      <IsometricCamera />
    </a-scene>
  );
}

export default ViewerScene;