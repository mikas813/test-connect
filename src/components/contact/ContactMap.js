import React from 'react'
import {useForm} from '../formMap/context/useForm'

const {compose, withProps} = require( 'recompose' )

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  BicyclingLayer,
  Marker
} = require( 'react-google-maps' )


const Maps = compose(
  withProps( {
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries',
    loadingElement: <div style={{height: `100%`}}/>,
    //Changed height and added css 'width' property
    containerElement: <div style={{height: `714px`, width: `45%`}}
      // Added a new classNames from bootstrap to make Map component responsive
                           className='w-100 d-xl-block '
    />,
    mapElement: <div style={{height: `100%`}}/>
  } ),
  withScriptjs,
  withGoogleMap
)

( () => {
    const {
      coords,
      getCoords
    } = useForm()

    return (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{lat: 38.7082888335, lng: -9.13696445214}}
        onClick={event => {
          getCoords( event )
        }}
        defaultOptions={{
          disableDefaultUI: true, // disable default map UI
          draggable: true, // make map draggable
          keyboardShortcuts: false, // disable keyboard shortcuts
          scaleControl: true, // allow scale controle
          zoomControl: true,
          scrollwheel: true, // allow scroll wheel
          styles: [
            {
              'featureType': 'road',
              'stylers': [
                {'color': '#ffffff'}
              ]
            }, {
              'featureType': 'water',
              'stylers': [
                {'color': '#96cbe9'}
              ]
            }, {
              'featureType': 'landscape',
              'stylers': [
                {'color': '#c4f5cd'}
              ]
            }, {
              'elementType': 'labels.text.fill',
              'stylers': [
                {'color': 'transparent'}
              ]
            }, {
              'featureType': 'poi',
              'stylers': [
                {'color': '#aafe9d'}
              ]
            }, {
              'elementType': 'labels.text',
              'stylers': [
                {'saturation': 1},
                {'weight': 0.1},
                {'color': '#737980'}
              ]
            }
          ],
          icon: 'images/map-marker.png'
        }}
      >
        <Marker
          icon={{
            url: 'images/map-marker.png',
            anchor: new window.google.maps.Point( 23, 45 ),
            origin: new window.google.maps.Point( 0, 0 )
          }}

          animation={3}
          position={{
            lat: coords.latitude ? +coords.latitude : 38.7082888335, // latitude to position the marker
            lng: coords.longitude ? +coords.longitude : -9.13696445214 // longitude to position the marker
          }}
        />
        <BicyclingLayer autoUpdate/>
      </GoogleMap>
    )
  }
)

export default Maps