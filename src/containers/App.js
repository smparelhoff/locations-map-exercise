import React from "react";
import PropTypes from "prop-types";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import { fetchLocations } from "../helpers/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };

    this.geocoder = new this.props.google.maps.Geocoder()
  }

  componentDidMount() {
    fetchLocations()
      .then(response => {
        this.setState({markers: response})
        console.log(response)
      })
      .catch(error => console.log(error));
  }

  render() {
    this.geocoder.geocode({address: "44 Butler Pl, Brooklyn, NY 11238"}, (results, status) => {console.log(status)})
    return (
      <div>
        <h1>Locations Map Exercise!</h1>
        <Map
          google={this.props.google}
          zoom={8}
          // style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC401UbpUdxh-L1Vvgo3Cv_s8wZDRnqPUM"
})(App);
