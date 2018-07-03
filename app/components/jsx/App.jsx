import React from 'react';
import TopLink from './TopLink';
import LeftLink from './LeftLink'
import { left_info } from './Info';
require('../css/App.css');

class App extends React.Component {
  
  render() {
    return (
      <main>
      <TopLink />
      <LeftLink />
      </main>
    );
  }
}

export default App
