import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ViewerScene from './Components/Scenes/ViewerScene/ViewerScene';

class App extends React.Component {

  render() {
    return (
      <main className='app'>
        <div className='app__toolkit'>
          <h3>Corporate Experience Toolkit</h3>
        </div>
        <ViewerScene className='app__viewer-scene'/>
        <div className='app__inspector'>
          <h3>Information Flow Inspector</h3>
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
