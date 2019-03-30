import React, { Component } from 'react'
import requester from '../../helpers/requester'
import Post from './Post'
import '../../style/post.css'

export default class PostsList extends Component {
    constructor(props){
        super(props);
        this.state = { posts: []}
    }

    getPosts = () =>
        requester.get('appdata', 'posts', 'kinvey')
            .then(res => {
                this.setState({posts: res})
            })

    componentDidMount = ()  => this.getPosts()

    render = () => {
        return (<section id="viewCatalog">
            {this.state.posts.map((p, index) => <Post key={p._id} rank={index} {...p} rerenderPosts={this.componentDidMount}/>)}
        </section>)
  
    }
}