import React, { useContext, useState } from "react";
import { InspectorDispatch } from "../../InspectorDispatch";

import "aframe";
import "aframe-animation-component";

import { Entity } from "aframe-react";

const ViewerScene = props => {
  const { state, dispatch } = useContext(InspectorDispatch);

  const color = props.color ? props.color : "lightgrey";
  const offset = props.offset ? props.offset : 0;
  const uniformScale = props.uniformScale ? props.uniformScale : 1;
  const opacity = props.opacity ? props.opacity : 1;
  const level = 1;

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         color: (props.color) ? props.color : 'lightgrey',
  //         offset: (props.offset) ? props.offset : 0,
  //         uniformScale: (props.uniformScale) ? props.uniformScale : 1,
  //         opacity: (props.opacity) ? props.opacity : 1,
  //     };
  // }

//   const focus = () => {
//     uniformScale = 1.2;
//   }

  const animation = {
    to: { x: 0, y: offset, z: 0 },
    from: { x: 0, y: offset / level + 9.6, z: 0 }
  };

  //   console.log(this.state.textureId);

  return (
    <Entity
      position={{ x: 0, y: offset, z: 0 }}
      scale={{
        x: uniformScale,
        y: uniformScale,
        z: uniformScale
      }}
      animation={{
        property: "position",
        from: animation.from,
        to: animation.to,
        loop: false,
        easing: "easeOutElastic",
        elasticity: 100
      }}
    >
      <Entity
        className="floor"
        geometry={{ primitive: "box", height: 0.2, width: 10, depth: 10 }}
        material={{ color: color, opacity: opacity }}
        // events={{ click: this.focus.bind(this) }}
      />
      <Entity position="4.111 0.262 3.729" sprite={{ src: "hotspot.png" }} />
    </Entity>
  );
}

export default ViewerScene;
