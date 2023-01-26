// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {logout: true}

  render() {
    const {logout} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">{logout ? <Login /> : <Logout />}</div>
      </div>
    )
  }
}

export default Home
