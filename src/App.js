import React from 'react'
import './index.css'
import Tiles from './Tiles.js'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inventory: []
    };
  }
  render() {
    return (
      <div >
        <Tiles />
      </div>
    )
  }
}

export default App