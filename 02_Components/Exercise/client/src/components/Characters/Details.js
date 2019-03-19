import React from 'react';

export default class Details extends React.Component {

    

    render = () => {
            if(this.props.bio){
                return (
                    <section id="bio">
                        <div className="image">
                            <img src={this.props.url} alt="detailsImg"/>
                        </div>
                        <div className="info">
                            <p>Name: {this.props.name}<strong></strong></p>
                            <p>Bio: {this.props.bio}</p>
                            <p></p>
                        </div>
                    </section>
                    )
            }

            return (
            <section id="bio"><i>Select a character</i></section>
            )
       
    }
}