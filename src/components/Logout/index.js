// Write your code here
import {Component} from 'react'

import './index.css'

class Logout extends Component {
  state = {logout: true}

  onLogout = () => {
    const {logout} = this.state
    this.setState(() => ({logout: !logout}))
  }

  onLogin = () => {
    const {logout} = this.state
    this.setState(() => ({logout: !logout}))
  }

  render() {
    const {logout} = this.state
    return (
      <div>
        {logout ? (
          <button className="btn" type="button" onClick={this.onLogout}>
            Logout
          </button>
        ) : (
          <button className="btn" type="button" onClick={this.onLogin}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default Logout
