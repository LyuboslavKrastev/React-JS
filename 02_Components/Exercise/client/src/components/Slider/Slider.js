import React from 'react';
import fetcher from '../../fetcher';

const IMAGE_URL = '/episodePreview/';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            url: ''
        }       
    }

    fetchEpisode = (id) => fetcher.get(IMAGE_URL + id, 
        (data) => { 
            this.setState(data);
         }); // the fetch should recieve a json with id and url parameters, so we update the state with the recieved response data


    componentDidMount = () => {
        this.fetchEpisode(0);
    }

    render = () => (
            <section id="slider">

                <img className="button" src="/left.png" title="previous" alt="nav" onClick={() => this.fetchEpisode(this.state.id - 1)}/>
                <div className="image-container">
                    <img src={this.state.url} alt="episode" />
                </div>
                <img className="button" src="/right.png" title="next" alt="nav" onClick={() => this.fetchEpisode(this.state.id + 1)}/>
            </section>
        );
}