'use strict'

import React, { Component } from 'react'

class OnResize extends Component {
  componentDidMount() {
    let self = this
    self._resizeListener = function(event) {
      let handler = self.resizeHandler || self.props.resizeHandler
      if(!handler) { return console.warn('gotta have that handler tho') }
      handler.call(self, event)
    }

    window.addEventListener('resize', self._resizeListener)
    React.findDOMNode(this).addEventListener('resize', self._resizeListener)
  }
  componentDidUnmount() {
    window.removeEventListener('resize', self._resizeListener)
    React.findDOMNode(this).removeEventListener('resize', self._resizeListener)
  }
  render() {
    return <div>{this.props.children}</div>
  }
}

export default OnResize
