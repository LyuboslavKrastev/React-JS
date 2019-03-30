import React, { Component } from 'react'
import requester from '../../helpers/requester';
import Comment from './Comment'

//GET https://baas.kinvey.com/appdata/app_id/comments?query={"postId":"post_id"}&sort={"_kmd.ect": -1}



export default class CommentsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }

        console.log(this.props)
    }

    getComments = (nextProps) => {
        let query = `?query={"postId":"${nextProps.postId}"}&sort={"_kmd.ect": -1}`;
        requester.get('appdata', `comments${query}`, 'kinvey')
        .then(res => {
            this.setState({
                comments: res
            })
        })}
 
    componentWillReceiveProps(nextProps) {
        this.getComments(nextProps)
    }

    render = () => {  
        return (<section id="viewCatalog">
            {this.state.comments.map((c, index) => <Comment key={c._id} rank={index} {...c} rerenderDetails={this.props.rerenderDetails}/>)}
        </section>)
    }
}