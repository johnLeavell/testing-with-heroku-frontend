import React, { Component } from 'react'

export default class App extends Component {
  state ={
    name: ''
  }

  componentDidMount(){
    fetch('https://evening-dawn-99907.herokuapp.com/') //production evn
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        name: data.name
      })
    })
  }

  
  render() {
    return (
      <div>
        Hello, {this.state.name}
      </div>
    )
  }
}
