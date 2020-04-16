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
          <button className="resume" onClick={this.handleClick} >Resume Game</button>
          <button className="resume" > Save Game</button>
          <button className="resume" > Settings </button>
        </div>
      </div>
    )
  }
}

export default Settings;