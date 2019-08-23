import React, { useContext } from "react";

import "./Toolkit.css";

import { Menu, Icon, Container, Button } from "semantic-ui-react";

import ToolkitItem from "./ToolkitItem";
import { InspectorDispatch } from "../InspectorDispatch";

const Toolkit = () => {
  const { state, dispatch } = useContext(InspectorDispatch);

  const toggleCustomersLayer = () => {
    dispatch({type: "toggleCustomersLayer"})
  }

  return (
    <div className="Toolkit">
      <Menu.Item as="a" header>
        Toolkit
      </Menu.Item>
      <Container fluid text>
        <p>Ihre Unternehmens Bausteine</p>
      </Container>
      <Menu.Item as="a" header>
        Customers
      </Menu.Item>
      <div className="Toolkit__items Toolkit__items--customers">
        <ToolkitItem />
        <Button icon labelPosition="right" onClick={toggleCustomersLayer}>
          Erstellen <Icon name="add" />
        </Button>
      </div>
      <Menu.Item as="a" header>
        Prozesse
      </Menu.Item>
      <div className="Toolkit__items Toolkit__items--customers">
        <ToolkitItem />
        <Button icon labelPosition="right">
          Erstellen <Icon name="add" />
        </Button>
      </div>
      <Menu.Item as="a" header>
        Channels
      </Menu.Item>
      <div className="Toolkit__items Toolkit__items--customers">
        <ToolkitItem />
        <ToolkitItem />
        <ToolkitItem />

        <Button icon labelPosition="right">
          Erstellen <Icon name="add" />
        </Button>
      </div>
    </div>
  );
};

export default Toolkit;
