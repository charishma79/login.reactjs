// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'

class Login extends Component {
  state = {logout: true}

  onLogin = () => {
    const {logout} = this.state
    this.setState(() => ({logout: !logout}))
  }

  onLogout = () => {
    const {logout} = this.state
    this.setState(() => ({logout: !logout}))
  }

  render() {
    const {logout} = this.state
    return (
      <div>
        {logout ? <Message /> : <h1 className="heading">Welcome User </h1>}
        {logout ? (
          <button className="btn" type="button" onClick={this.onLogin}>
            Login
          </button>
        ) : (
          <button className="btn" type="button" onClick={this.onLogin}>
            Logout
          </button>
        )}
      </div>
    )
  }
}

export default Login
