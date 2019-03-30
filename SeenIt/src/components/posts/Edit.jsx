import React, { Component } from 'react'
import requester from '../../helpers/requester'
import Navigation from '../common/Navigation';

export default class Edit extends Component {
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
    
    //PUT https://baas.kinvey.com/appdata/app_id/posts/post_id
    
    getDetails = (id) =>{
        let endPoint = `posts/${id}`
        requester.get('appdata', endPoint, 'kinvey')
            .then(res => 
                this.setState({
                id: res._id,
                author: res.author,
                description: res.description,
                url: res.url,
                imageUrl: res.imageUrl,
                title: res.title
            })
        )
    }

    componentDidMount = ()  => this.getDetails(this.props.match.params.id) // gets the id from the url

    
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

        let endPoint = `posts/${this.state.id}`

        requester.update('appdata', endPoint, '', data)
            .then(res => {
                console.log(res)
        })
    }


    render = () => {
        return (
            <div>
                <Navigation/>

                <section id="viewPostEdit">
                <div className="submitArea">
                    <h1>Edit Post</h1>
                    <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                    <form id="editPostForm" className="submitForm">
                        <label>Link URL:</label>
                        <input name="url" type="text" value={this.state.url} onChange={this.handleInputChange}/>
                        <label>Link Title:</label>
                        <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange}/>
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                        <label>Comment (optional):</label>
                        <textarea name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
                        <input type="submit" value="Edit Post" onClick={this.handleSubmit}/>
                    </form>
                </div>
                </section>
            </div>
        )
    }
}