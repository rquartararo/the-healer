import React from 'react';

class Tiles extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let allTiles = []
    for (let i = 0; i < 3116; i++) {
      allTiles.push(<div className="tile" id={`tile${i}`}
        key={`tile${i}`} ></div>)
    }
    return (
      <div className="tilemap">
        {allTiles}
      </div>
    )
  }
}

export default Tiles;