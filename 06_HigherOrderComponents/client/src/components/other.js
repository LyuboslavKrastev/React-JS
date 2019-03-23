import React, { Component } from 'react'
import withLogging from '../helpers/withLogging';

class OtherBase extends Component {
    static displayName = 'Other'

    render() {
      return (
        <h1>Other</h1>
      );
    }
}

const Other = withLogging(OtherBase)

export default Other