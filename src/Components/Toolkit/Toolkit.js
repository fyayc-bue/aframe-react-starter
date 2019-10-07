import React, { useContext } from "react";
import { library } from '../EntityLibrary/EntityLibrary';

import "./Toolkit.css";

import { Menu, Icon, Container, Button } from "semantic-ui-react";

import ToolkitItem from "./ToolkitItem";
import { InspectorDispatch } from "../Dispatch/InspectorDispatch";

const Toolkit = (props) => {
  const { state, dispatch } = useContext(InspectorDispatch);

  const persons = library.filter(entity => entity.type === 'Persons');

  return (
    <div className="Toolkit">
      <Menu.Item as="a" header>
        Toolkit
      </Menu.Item>
      <Container fluid text>
        <p>Ihre Unternehmens Bausteine</p>
      </Container>
      <Menu.Item as="a" header>
        Persons
      </Menu.Item>
      <ul className="Toolkit__items Toolkit__items--customers">
        {persons.map(entity => {
          return <li key={entity.id}>
            <ToolkitItem entity={entity}/>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Toolkit;
