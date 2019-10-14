import React, { useContext, useState } from "react";
import { InspectorDispatch } from "../../Dispatch/InspectorDispatch";

import "aframe";
import "aframe-animation-component";

const ViewerScene = props => {
  const { state, dispatch } = useContext(InspectorDispatch);

  const color = props.color ? props.color : "lightgrey";
  const offset = props.offset ? props.offset : 0;
  const opacity = (state.activeLayer === props.name) ? '1' : '0.5';
  const scale = (state.activeLayer === props.name) ? '2 2 2' : '1 1 1';

  const entities = state.layers.find(layer => layer.name === state.activeLayer).entities;

  console.log(entities)

  return (
    <a-entity
      position={`0 ${offset} 0`}
      scale={scale}
    >
      {/* <a-animation id="focus"
        from="1 1 1"
        to="2 2 2"
        property="scale"
        loop="false"
        // easing="easeOutElastic"
        elasticity="100"
        startEvent="focus" />
      <a-animation id="blur"
        from="1 1 1"
        to="2 2 2"
        property="scale"
        loop="false"
        // easing="easeOutElastic"
        elasticity="100"
        startEvent="blur" /> */}
      <a-entity
        className="floor"
        geometry="primitive: box; height: 0.2; width: 10; depth: 10"
        material={`color: ${color}; opacity: ${opacity}`}
      ></a-entity>
      {entities.map((entity, index) => {
        const spriteSrc = 'src: ' + entity.path;
        <a-entity position={entity.position} scale={entity.scale} sprite={spriteSrc} />
      })}
      {/* <a-entity position="4 1 -4" scale="2 2 2" sprite="src: icon-library/Services/f-icon_service_0727_information-model.png" />
      <a-entity position="4 1 -4" scale="2 2 2" sprite="src: icon-library/Persons/f-icon_person_0089_mailing-boy.png" /> */}
    </a-entity>
  );
}

export default ViewerScene;
