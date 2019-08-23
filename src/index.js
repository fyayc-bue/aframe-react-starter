import "babel-polyfill";

import React, { useState, useContext, useReducer, createContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import {
  Sidebar,
  Menu,
  Icon,
  Button,
  Container,
  SidebarPushable,
  SidebarPusher
} from "semantic-ui-react";

import ViewerScene from "./Components/Scenes/ViewerScene/ViewerScene";
import Inspector from "./Components/Inspector/Inspector";
import Toolkit from "./Components/Toolkit/Toolkit";
import {
  InspectorDispatchProvider,
  InspectorDispatch
} from "./Components/InspectorDispatch";

const App = () => {
  const [visible, setVisible] = useState(true);

  const handleHideClick = () => setVisible(false);
  const handleShowClick = () => setVisible(true);
  const handleSidebarHide = () => setVisible(false);
  const computeButtonClass = visible =>
    visible ? "App__controls__button--hidden" : "App__controls__button";

  const { state, dispatch } = useContext(InspectorDispatch);

  return (
    <main className="App">
      <InspectorDispatchProvider>
        <SidebarPusher>
          <div className="App__controls">
            <Button
              basic
              color="red"
              icon="stop"
              className={computeButtonClass(visible)}
              onClick={handleShowClick}
            />
            <Button
              basic
              icon="play"
              className={computeButtonClass(!visible)}
              onClick={handleHideClick}
            />
          </div>
          

          <ViewerScene className="App__viewer-scene"/>
        </SidebarPusher>

        <SidebarPushable className="App__sidebars">
          <Sidebar
            as={Menu}
            className="App__sidebar App__sidebar--toolkit"
            animation="push"
            direction="left"
            vertical
            visible={visible}
          >
            <Toolkit />
          </Sidebar>
          <Sidebar
            className="App__sidebar App__sidebar--inspector"
            as={Menu}
            animation="push"
            direction="right"
            vertical
            visible={visible}
          >
            <Inspector />
          </Sidebar>
        </SidebarPushable>
      </InspectorDispatchProvider>
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
