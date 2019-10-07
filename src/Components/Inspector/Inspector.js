import React, { useContext, useState } from "react";

import "./Inspector.css";
import { Menu, Icon, Container } from "semantic-ui-react";
import { InspectorDispatch } from "../Dispatch/InspectorDispatch";

const Inspector = props => {
  const { state, dispatch } = useContext(InspectorDispatch);

  const selectLayer = (layerName) => {
    dispatch({ type: "selectLayer", layerName: layerName});
  };

  const [layer, setLayer] = useState(state.layers.find(layer => layer.name === 'customers'));

  return (
    <div className="Inspector">
      <Menu.Item as="a" header>
        Inspektor
      </Menu.Item>
      <Container text fluid>
        <p>Kein Item ausgewählt!</p>
      </Container>
      <Menu.Item as="a" onClick={() => selectLayer('customers')}>
        Customer Layer
      </Menu.Item>
      <Container text fluid>
        <ul>
          {layer.entities.map(entity => {
            <li key={entity.id}>{entity.titel}</li>
          })}
        </ul>
      </Container>
      <Menu.Item as="a" onClick={() => selectLayer('experience')}>
        Experience Layer
      </Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a" onClick={() => selectLayer('organisation')}>
        Organisation Layer
      </Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a" onClick={() => selectLayer('performance')}>Performance Layer</Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a" onClick={() => selectLayer('asset')}>Asset Layer</Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a" onClick={() => selectLayer('data')}>Data Layer</Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
    </div>
  );
};

export default Inspector;
