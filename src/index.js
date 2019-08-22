import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Sidebar, Menu, Icon, Button, Container, SidebarPushable, SidebarPusher } from 'semantic-ui-react';

import ViewerScene from './Components/Scenes/ViewerScene/ViewerScene';

class App extends React.Component {

  state = { visible: true }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  computeButtonClass = (visible) => (visible) ? 'app__controls__button--hidden' : 'app__controls__button';

  render() {

    const { visible } = this.state

    return (
      <main className='app'>

        <SidebarPusher>
          <div class='app__controls'>
            <Button basic icon='edit outline' className={this.computeButtonClass(visible)} onClick={this.handleShowClick} />
            <Button basic icon='eye' className={this.computeButtonClass(!visible)} onClick={this.handleHideClick} />
          </div>
          <ViewerScene className='app__viewer-scene' />
        </SidebarPusher>

        <SidebarPushable className='app__sidebars'>
          <Sidebar
            as={Menu}
            className='app__sidebar app__sidebar--toolkit'
            animation='push'
            direction='left'
            vertical
            visible={visible}>
            <Menu.Item as='a' header>Toolkit</Menu.Item>
            <Menu.Item as='a'>
              Customer <Icon name='add'/>
            </Menu.Item>
            <Menu.Item as='a'>
              Prozess <Icon name='add'/>
            </Menu.Item>
            <Menu.Item as='a'>
              Channel <Icon name='add'/>
            </Menu.Item>

          </Sidebar>
          <Sidebar className='app__sidebar app__sidebar--inspector'
            as={Menu}
            animation='push'
            direction='right'
            vertical
            visible={visible}>
            <Menu.Item as='a' header>Inspektor</Menu.Item>
            <Container text fluid><p>Kein Item ausgewählt!</p></Container>
            <Menu.Item as='a'>Customer Layer</Menu.Item>
            <Container text fluid><p>...</p></Container>
            <Menu.Item as='a'>Experience Layer</Menu.Item>
            <Container text fluid><p>...</p></Container>
            <Menu.Item as='a'>Organisation Layer</Menu.Item>
            <Container text fluid><p>...</p></Container>
            <Menu.Item as='a'>Performance Layer</Menu.Item>
            <Container text fluid><p>...</p></Container>
            <Menu.Item as='a'>Asset Layer</Menu.Item>
            <Container text fluid><p>...</p></Container>
            <Menu.Item as='a'>Data Layer</Menu.Item>
            <Container text fluid><p>...</p></Container>
          </Sidebar>
        </SidebarPushable>





      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
