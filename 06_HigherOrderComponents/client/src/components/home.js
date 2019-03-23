import React, { Component } from 'react'
import withLogging from '../helpers/withLogging';

class HomeBase extends Component {
    static displayName = 'Home'

    render() {
      let message = this.props.message || 'Home'

      return (
        <h1>{message}</h1>
      );
    }
}

const Home = withLogging(HomeBase);

export default Home