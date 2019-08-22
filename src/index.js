import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Sidebar, Menu, Icon, Button, Container, SidebarPushable, SidebarPusher } from 'semantic-ui-react';

import ViewerScene from './Components/Scenes/ViewerScene/ViewerScene';
import Inspector from './Components/Inspector/Inspector';
import Toolkit from './Components/Toolkit/Toolkit';

class App extends React.Component {

  state = { visible: true }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  computeButtonClass = (visible) => (visible) ? 'App__controls__button--hidden' : 'App__controls__button';

  render() {

    const { visible } = this.state

    return (
      <main className='App'>

        <SidebarPusher>

          <div className='App__controls'>
            <Button basic color='red' icon='stop' className={this.computeButtonClass(visible)} onClick={this.handleShowClick} />
            <Button basic icon='play' className={this.computeButtonClass(!visible)} onClick={this.handleHideClick} />
          </div>

          <ViewerScene className='App__viewer-scene' />

        </SidebarPusher>

        <SidebarPushable className='App__sidebars'>
          <Sidebar
            as={Menu}
            className='App__sidebar App__sidebar--toolkit'
            animation='push'
            direction='left'
            vertical
            visible={visible}>

            <Toolkit/>

          </Sidebar>
          <Sidebar className='App__sidebar App__sidebar--inspector'
            as={Menu}
            animation='push'
            direction='right'
            vertical
            visible={visible}>

            <Inspector/>

          </Sidebar>
        </SidebarPushable>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#main'));
