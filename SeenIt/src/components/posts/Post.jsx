import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../helpers/requester'

function pluralize(value) {
    if (value !== 1) return 's';
    else return '';
}

export default class Post extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            author: '',
            title: '',
            imageUrl: '',
            description: ''
        }
    }

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

    handleDelete = () => {
        let id = this.props._id
        let endPoint = `posts/${id}`
        
        requester.remove('appdata', endPoint, 'kinvey')
            .then(res => {
                if(!res.error){
                    this.props.rerenderPosts()
                }
            })
                
    }
    render = () => {
        let id = this.props._id
        let detailsPath = `/details/${id}`;
        let editPath = `/edit/${id}`;


        return (
            <article className="post">
            <div className="col rank">
                <span>{this.props.rank + 1}</span>
            </div>
            <div className="col thumbnail">
                <a href={this.props.url}>
                    <img src={this.props.imageUrl} alt='borken img'/>
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={this.props.url}>
                       {this.props.title}
                    </a>
                </div>
                <div className="details">
                    <div className="info">
                    {this.daysSinceCreation()}
                    </div>
                    <div className="controls">
                        <ul>
                            <li className="action"><Link to={detailsPath}>Details</Link></li>
                            <li className="action"><Link to={editPath} className="editPost">Edit</Link></li>
                            <li className="action"><button onClick={this.handleDelete} className="deletePost">Delete</button></li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
        )
    }
}