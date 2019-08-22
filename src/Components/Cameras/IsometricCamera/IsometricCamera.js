import 'aframe';
import 'aframe-animation-component';

import { Entity } from 'aframe-react';
import React from 'react';

export default class IsometricCamera extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Entity id="rig" position={{ x: 120, y: 120, z: 120 }} >
                <Entity primitive="a-camera"
                    fov={10} camera={{ userHeight: 0 }}
                    position={{ x: 0, y: 0, z: 0 }}
                    rotation={{ x: -35, y: 45, z: 0 }}
                    look-controls="enabled: false; hmdEnabled: false">
                    {/* <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/> */}
                </Entity>
            </Entity>
        );
    }
}