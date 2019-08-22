import 'aframe';
import 'aframe-animation-component';

import { Entity } from 'aframe-react';
import React from 'react';

export default class ViewerScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: (props.color) ? props.color : 'lightgrey',
            offset: (props.offset) ? props.offset : 0,
            uniformScale: (props.uniformScale) ? props.uniformScale : 1,
        };
    }

    focus() {
        this.setState({
            uniformScale: 1.2
        })
    }

    render() {
        return (
            <Entity 
                position={{ x: 0, y: this.state.offset, z: 0 }}
                scale={{x: this.uniformScale, y: this.uniformScale, z: this.uniformScale }}>
                <Entity className='floor'
                    geometry={{ primitive: 'box', height: .2, width: 10, depth: 10 }}
                    material={{ color: this.state.color, opacity: 0.8 }}
                    events={{ click: this.focus.bind(this) }}
                >
                </Entity>
            </Entity>
        );
    }
}
