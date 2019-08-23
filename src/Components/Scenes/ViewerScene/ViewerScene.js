// Aframe
import 'aframe';
import 'aframe-animation-component';

// Aframe Components
import './../../../Entities/Line.js';
import './../../../Entities/Sprite.js';

// Framework
import { Entity, Scene } from 'aframe-react';
import React, {useState, useContext} from 'react';

// React Components
import BaseLayer from './../../../Components/Layers/BaseLayer/BaseLayer';
import IsometricCamera from '../../Cameras/IsometricCamera/IsometricCamera';

import { InspectorDispatch } from "../../InspectorDispatch";

const ViewerScene = (props) => {

  const [color, setColor] = useState('red');
  const [collapsed, setCollapsed] = useState(false);
  const [distance, setDistance] = useState({min: .2, max: 3});
  const [centerY, setCenterY] = useState(0);

  const collapse = () =>
    setCollapsed(true);


  const calculateOffset = (level) => {
    const newDistance = (collapsed) ? distance.min : distance.max;
    const offset = level * newDistance;
    console.log(offset);
    return offset;
  }


    const { state, dispatch } = useContext(InspectorDispatch);

    return (
      <Scene vr-mode-ui="enabled: false">
        <a-assets>
          {/* Asset have to be defined in the root aframe scene */}
          <img id="hotspotimage" src="hotspot.png" />
        </a-assets>

        <Entity line="path: 10 10 10, 0 0 0, -10 -10 -10" />

        <Entity
          primitive="a-light"
          type="directional"
          color="#fff"
          position={{ x: -4.052, y: 10.436, z: 5.583 }}
        />

        <Entity id="explodedViewRoot">
          {state.customersLayer && (
            <BaseLayer
              id="customersLayer"
              offset={calculateOffset(3)}
              opacity="0.5"
              uniformScale={state.enlarge}
              color="lightblue"
            />
          )}
          <BaseLayer
            id="experienceLayer"
            offset={calculateOffset(2)}
            color="turquoise"
          />
          <BaseLayer
            id="organisationLayer"
            offset={calculateOffset(1)}
            color="lightgreen"
          />
          <BaseLayer
            id="performanceLayer"
            offset={calculateOffset(0)}
            color="yellow"
          />
          <BaseLayer
            id="assetLayer"
            offset={calculateOffset(-1)}
            uniformScale="1.1"
            color="orange"
          />
          <BaseLayer
            id="dataLayer"
            offset={calculateOffset(-2)}
            color="red"
          />
        </Entity>
        <IsometricCamera />
      </Scene>
    );
}

export default ViewerScene;