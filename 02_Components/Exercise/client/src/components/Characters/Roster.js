import React from 'react';

export default class Roster extends React.Component {
    render = () => {

        const images = this.props.images.map(i => (
            <div key={i.id}>
                <img src={i.url} alt={"alt Img"} className="imageFlex" onClick={() => this.props.select(i.id)}/>
            </div>
        ));

        return (
            <section id="roster">
                {images}
            </section>
        )
    }
}