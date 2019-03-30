import React, { Component } from 'react'
import Post from './Post'
import requester from '../../helpers/requester'
import Navigation from '../common/Navigation';

export default class MyPosts extends Component {
    constructor(props){
        super(props);
        this.state = { posts: []}
    }
    //GET https://baas.kinvey.com/appdata/app_id/posts?query={"author":"username"}&sort={"_kmd.ect": -1}
    getPosts = () => {
        let username = sessionStorage.getItem('username');
        let endpoint = `posts?query={"author":"${username}"}`;

        requester.get('appdata', endpoint, 'kinvey')
        .then(res => {
            console.log(res)
            this.setState({posts: res})
        })
    }
      

    componentDidMount = ()  => this.getPosts()

    render = () => {
        return (
            <div>
            <Navigation/>
                
            <section id="viewCatalog">
                {this.state.posts.map((p, index) => <Post key={p._id} rank={index} {...p} rerenderPosts={this.componentDidMount}/>)}
            </section>
        </div>
        )
  
    }
}