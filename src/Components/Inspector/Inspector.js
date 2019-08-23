import React, { useContext } from "react";

import "./Inspector.css";
import { Menu, Icon, Container } from "semantic-ui-react";
import { InspectorDispatch } from "../InspectorDispatch";

const Inspector = props => {
  const { state, dispatch } = useContext(InspectorDispatch);

  const incrementClick = () => {
    dispatch({ type: "increment" });
  };
  const decrementClick = () => {
    dispatch({ type: "decrement" });
  };
  const selectCustomerLayer = () => {
    dispatch({ type: "selectCustomerLayer" });
  };

  return (
    <div className="Inspector">
      <Menu.Item as="a" header>
        Inspektor
      </Menu.Item>
      <Container text fluid>
        <p>Kein Item ausgewählt!</p>
      </Container>
      <Menu.Item as="a" onClick={selectCustomerLayer}>
        Customer Layer
      </Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a">
        Experience Layer
      </Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a">
        Organisation Layer
      </Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a">Performance Layer</Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a">Asset Layer</Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
      <Menu.Item as="a">Data Layer</Menu.Item>
      <Container text fluid>
        <p>leer</p>
      </Container>
    </div>
  );
};

export default Inspector;
