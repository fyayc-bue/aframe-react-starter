import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Sidebar, Menu, Icon, Button, Header, SidebarPushable } from 'semantic-ui-react';

import ViewerScene from './Components/Scenes/ViewerScene/ViewerScene';

class App extends React.Component {

  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {

    const { visible } = this.state

    return (
      <main className='app'>
        
        {/* <SidebarPushable>
          <Sidebar 
            as={Menu}
            className='app__toolkit'
            animation='overlay'
            direction='left'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'>
            <Header as='h3'>Toolkit</Header>

            <Menu.Item as='a'>
              Customer
            </Menu.Item>
            <Menu.Item as='a'>
              Process
            </Menu.Item>
            <Menu.Item as='a'>
              Channel
            </Menu.Item>

          </Sidebar>
          <Sidebar className='app__inspector sidebar'>
            <Header as='h3'>Inspector</Header>
          </Sidebar>
        </SidebarPushable> */}

        {/* <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebars
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebars
          </Button>
        </Button.Group> */}

        <ViewerScene className='app__viewer-scene'/>
        
        
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
