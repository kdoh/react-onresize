'use strict'

import React, { Component } from 'react'
import OnResize from './component.js'

class App extends OnResize {
  constructor(props) {
    super(props)
    this.state = {}
  }
  setWidthAndHeight() {
    let node = React.findDOMNode(this)
    this.setState({
      width: node.offsetWidth,
      height: node.offsetHeight
    })
  }
  componentDidMount() {
    this.setWidthAndHeight()
  }
  onResize() {
    this.setWidthAndHeight()
  }
  render() {
    return (
      <OnResize resizeHandler={this.onResize.bind(this)}>
      <SomeComponent width={this.state.width} height={this.state.height}/>
      </OnResize>
    )
  }
}

class SomeComponent extends Component {
  render() {
    const { width, height } = this.props
    return <div style={{width: width, height: height}}>DERP DERP DERP DERP</div>
  }
}

export default App
