import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Container, Header } from 'semantic-ui-react';

import ViewerScene from './Components/Scenes/ViewerScene/ViewerScene';

class App extends React.Component {

  render() {
    return (
      <main className='app'>
        <Container className='app__toolkit sidebar'>
          <Header as='h3'>Corporate Experience Toolkit</Header>
        </Container>
        <ViewerScene className='app__viewer-scene'/>
        <Container className='app__inspector sidebar'>
          <Header as='h3'>Information Flow Inspector</Header>
        </Container>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
