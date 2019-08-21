import React from "react";
import PropTypes from "prop-types";
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

import {apiKey} from '../helpers/secrets';
import { fetchLocations } from "../helpers/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };

    this.decoder = new this.props.google.maps.Geocoder()
  }

  componentDidMount() {
    fetchLocations()
      .then(response => {
        console.log(response);
        this.setState({ markers: response });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (<div>
      <h1>Locations Map Exercise!</h1>
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{lat: 47.444, lng: -122.176}}
        >
        <Marker />
      </Map>
      </div>)
  }
}

export default GoogleApiWrapper({apiKey})(App);
