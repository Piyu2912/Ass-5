import React, { PureComponent } from 'react'

class Pure extends PureComponent {
  render() {

      const {about="A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components."}=this.props

    return (
      <div >
          <h2>You are seeing a Pure Component over here.</h2>
          <h4>{about}</h4>
      </div>
    )
  }
}

export default Pure