import React from 'react'

class Settings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleSettings();
  };

  render() {
    return (
      <div className="shadow">
        <div className="settings">
          <p>Airmid</p>
          <button onClick={this.handleClick} >Resume Game</button>
        </div>
      </div>
    )
  }
}

export default Settings;