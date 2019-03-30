import React, { Component } from 'react'
import '../../style/submit.css'
import Navigation from '../common/Navigation'
import requester from '../../helpers/requester'

export default class SubmitForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: '',
            title: '',
            imageUrl: '',
            description: ''
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
        let author = sessionStorage.getItem('username')
        data.author = author
        requester.post('appdata', 'posts', '', data)
            .then(res => {
                this.props.history.push("/catalog");
            })
    }

    render()  {
        return(
            <div>
            <Navigation/>
            <section id="viewPostCreate">
            <div  className="submitArea">
                <h1>Create Post</h1>
                <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                <form id="createPostForm" className="submitForm" onSubmit={this.handleSubmit}>
                    <label>Link URL:</label>
                    <input name="url" type="text" onChange={this.handleInputChange}/>
                    <label>Link Title:</label>
                    <input name="title" type="text" onChange={this.handleInputChange}/>
                    <label>Link Thumbnail Image (optional):</label>
                    <input name="imageUrl" type="text"onChange={this.handleInputChange}/>
                    <label>Description (optional):</label>
                    <textarea name="description" onChange={this.handleInputChange}></textarea>
                    <input type="submit" value="Create Post"/>
                </form>
            </div>
        </section>
        </div>)
        
    }
}