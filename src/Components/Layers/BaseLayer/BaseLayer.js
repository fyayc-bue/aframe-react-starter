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
            opacity: (props.opacity) ? props.opacity : 1,
        };
    }

    focus() {
        this.setState({
            uniformScale: 1.2
        })
    }

    render() {
        const animation = {
            to:{x:0,y:this.state.offset,z:0},
            from: {x:0,y:this.state.offset/this.state.level + 9.6,z:0},
        }
        console.log(this.state.textureId);
        return (
            <Entity
                position={{ x: 0, y: this.state.offset, z: 0 }}
                scale={{ x: this.state.uniformScale, y: this.state.uniformScale, z: this.state.uniformScale }}
                animation=
                {{
                    property: 'position',
                    from: animation.from,
                    to: animation.to,
                    loop: false,
                    easing: 'easeOutElastic',
                    elasticity: 100,
                }}>
                <Entity className='floor'
                    geometry={{ primitive: 'box', height: .2, width: 10, depth: 10 }}
                    material={{ color: this.state.color, opacity: this.state.opacity }}
                    events={{ click: this.focus.bind(this) }}
                >
                </Entity>
            </Entity>
        );
    }
}
