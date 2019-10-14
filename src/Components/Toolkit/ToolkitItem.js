// Framework
import React, { useState, useContext } from 'react';
import { IconLibraryImages, getItem } from '../EntityLibrary/EntityLibrary';

import './ToolkitItem.css';
import { Card, Image, Button } from 'semantic-ui-react';

import { InspectorDispatch } from "../Dispatch/InspectorDispatch";

const ToolkitItem = (props) => {

  const [entity, setEntity] = useState(props.entity);

  const { state, dispatch } = useContext(InspectorDispatch);

  const addEntity = () => {
    dispatch({ type: "addEntity", entity: entity })
  }

  return (
    <Card href="#" className='ToolkitItem'>
      <Image size='tiny' src={entity.path} />
      <Card.Content>
        <Card.Header>{entity.titel}</Card.Header>
        <Button size='mini' onClick={addEntity}>Hinzufügen</Button>
        </Card.Content>
    </Card>
  );
}

export default ToolkitItem;
