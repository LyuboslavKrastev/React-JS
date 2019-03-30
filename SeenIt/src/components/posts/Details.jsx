import React, { Component } from 'react'
import requester from '../../helpers/requester';
import Navigation from '../common/Navigation';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

export default class Details extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            author: '',
            description: '',
            url: '',
            title: '',
            imageUrl: ''
        }
    }

    getDetails = (id) =>
        requester.get('appdata', `posts/${id}`, 'kinvey', id).then(res => this.setState({
            id: res._id,
            author: res.author,
            description: res.description,
            url: res.url,
            imageUrl: res.imageUrl,
            title: res.title
        }))
    
    componentDidMount = ()  => this.getDetails(this.props.match.params.id) // gets the id from the url

    render = () => {
        return (      
            <div>
                <Navigation/>
                <section id="viewPostDetails">
                <article id="postDetails" className="post">
                    <div className="col thumbnail">
                    <img src={this.state.imageUrl} alt="not available"/>
                    </div>
                    <div className="post-content">
                        <div className="title">
                            <strong>{this.state.title}</strong>
                        </div>
                        <div className="details">
                            {this.state.description}
                        </div>
                    </div>
                </article>
                <CommentForm postId={this.state.id} rerenderDetails={this.componentDidMount}/>
                <CommentsList postId={this.state.id} rerenderDetails={this.componentDidMount}/>
                </section>              
            </div>
        )
    }
}