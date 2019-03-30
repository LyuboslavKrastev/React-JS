import React, { Component } from 'react'

import '../../style/comment.css'
import requester from '../../helpers/requester';

function pluralize(value) {
    if (value !== 1) return 's';
    else return '';
}

export default class Comment extends Component {

    //deleteComment = () => requester.remove('TODO')

    daysSinceCreation = () => {
        let dateIsoFormat = this.props._kmd.ect;
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
    }
    //DELETE https://baas.kinvey.com/appdata/app_id/comments/comment_id
    handleDelete = () => {
        let id = this.props._id
        let endPoint = `comments/${id}`
        
        requester.remove('appdata', endPoint, 'kinvey')
            .then(res => {
                if(!res.error){
                    this.props.rerenderDetails()
                }
            })
                
    }
    

    render = () => {
        return (
            <article className="comment">
            <div className="comment-content">
                {this.props.content}
            </div>
            <span>Submitted {this.daysSinceCreation()} ago </span>
            <button className="action" onClick={this.handleDelete}>Delete</button>
            </article>
        )
    }
}