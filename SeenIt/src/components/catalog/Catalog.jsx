import React, { Component } from 'react'
import '../../style/menu.css'
import PostsList from '../posts/PostsList'
import withNavigation from '../common/withNavigation'

class Catalog extends Component {
    render= () => {
        return (
            <div>
                <PostsList/>
            </div>
        )
    }
}

export default withNavigation(Catalog)