import React from 'react';

import Roster from './Roster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROSTER_ENDPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

export default class Characters extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            images: [],
            details: {
                id: null,
                name: '',
                url: '',
                bio: ''
            }
        }
    }

    mapImage(img) {
        let imageObject = { id: img.id, url: img.url}
        return imageObject;
    }

   mapImages(data) {
       let imagesObject = { 
           images: data.map(i => this.mapImage(i)) // data is an array of image data
        };

       return imagesObject;
   }

    fetchRoster = () => fetcher.get(ROSTER_ENDPOINT, 
        (data) => this.setState(this.mapImages(data)))

    fetchDetails = (id) => fetcher.get(DETAILS_ENDPOINT + id, 
        (data) => this.setState({details: data}))

    getCharacterDetails = (id) =>  // on character select
        this.fetchDetails(id);

    componentDidMount = () => this.fetchRoster();

    render = () => (
            <div>
                <Roster images={this.state.images} select={this.getCharacterDetails}/>
                <Details {...this.state.details}/> 
            </div>
        )
}