import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {click: true}

  clicked = () => {
    const {click} = this.state
    if (click) {
      this.setState(() => ({
        click: false,
      }))
    } else {
      this.setState(() => ({
        click: true,
      }))
    }
  }

  render() {
    const {click} = this.state
    return (
      <div className="container">
        {click ? (
          <div className="dark">
            <h1 className="darkH"> click To change Mode</h1>
            <button onClick={this.clicked}>Light Mode </button>
          </div>
        ) : (
          <div className="light">
            <h1 className="lightH"> click To change Mode</h1>
            <button onClick={this.clicked}>Dark Mode </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
