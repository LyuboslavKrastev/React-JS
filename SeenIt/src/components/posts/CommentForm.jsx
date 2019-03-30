import React, { Component } from 'react'
import requester from '../../helpers/requester'

//POST https://baas.kinvey.com/appdata/app_id/comments

export default class CommentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            postId: this.props.postId,
            content: ''
        }
    }

    handleInputChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let data = this.state
        
        requester.post('appdata', 'comments', '', data)
            .then(res => {
                this.props.rerenderDetails()
            })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            postId: nextProps.postId
        })
    }

    render = () => {
        return (
            <div className="submitArea">
                <form id="createCommentForm" className="submitForm" onSubmit={this.handleSubmit}>
                    <label>Comment:</label>
                    <textarea id="cmtContent" name="content" type="text" onChange={this.handleInputChange}></textarea>
                    <input type="submit" value="Post Comment"/>
                </form>
            </div>
        )
    }
}