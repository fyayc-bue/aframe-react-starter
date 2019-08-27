import 'aframe';

import { Entity } from 'aframe-react';
import React from 'react';

const IsometricCamera = () => {
    return (
      <Entity id="rig" position={{ x: 120, y: 80, z: 120 }}>
        <Entity
          primitive="a-camera"
          fov={10}
          camera={{ userHeight: 0 }}
          position={{ x: 0, y: 0, z: 0 }}
          rotation={{ x: -25, y: 45, z: 0 }}
          look-controls={{ enabled: false, hmdEnabled: false }}
          event-set__1={{
            _event: "mouseenter",
            scale: { x: 1.4, y: 1.4, z: 1.4 }
          }}
          event-set__1={{
            _event: "mouseleave",
            scale: { x: 1, y: 1, z: 1 }
          }}
          raycaster="objects: .clickable"
        >
          {/* <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/> */}
        </Entity>
      </Entity>
    );
}
export default IsometricCamera;
