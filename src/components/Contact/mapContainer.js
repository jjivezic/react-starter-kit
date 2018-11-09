import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component  {
  render() {
    const style = {
      width: '100%',
      height: '400px',
      
    }
    const color =  [
        {
          "featureType":"landscape",
          "stylers":[
          {"saturation":-100},
          {"lightness":65},
          {"visibility":"on"}
          ]
        },
        {
          "featureType":"poi",
          "stylers":[
          {"saturation":-100},
          {"lightness":51},
          {"visibility":"simplified"}
          ]
        },
        {
          "featureType":"road.highway",
          "stylers":[
          {"saturation":-100},
          {"visibility":"simplified"}
          ]
        },
        {
          "featureType":"road.arterial",
          "stylers":[
          {"saturation":-100},
          {"lightness":30},
          {"visibility":"on"}
          ]
        },
        {
          "featureType":"road.local",
          "stylers":[
          {"saturation":-100},
          {"lightness":40},
          {"visibility":"on"}
          ]
        },
        {
          "featureType":"transit",
          "stylers":[
          {"saturation":-100},
          {"visibility":"simplified"}
          ]
        },
        {
          "featureType":"administrative.province",
          "stylers":[
          {"visibility":"off"}
          ]
        },
        {
          "featureType":"water",
          "elementType":"labels",
          "stylers":[
          {"visibility":"on"},
          {"lightness":-25},
          {"saturation":-100}
          ]
        }
        ]
  
    const exampleMapStyles = [{
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    }]
    return (
      <Map google={this.props.google} zoom={15} style={style} styles={color}
      initialCenter={{
        lat: 45.264032,
        lng: 19.830794
      }}>
    <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 45.264032, lng: 19.830794}} /> 
    </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDlYNNs7VBO71qiKFMNiD0R9sd8hOt0wD4')
})(MapContainer)