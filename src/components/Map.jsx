import React from "react"
import PropTypes from "prop-types"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

const propTypes = {
  defaultZoom: PropTypes.number,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool,
  googleMapURL: PropTypes.string,
  loadingElement: PropTypes.element,
}

const defaultProps = {
  defaultZoom: 12,
  isMarkerShown: true,
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
}

const Map = withScriptjs(
  withGoogleMap(({ defaultZoom, lat, lng, isMarkerShown }) => {
    return (
      <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={{ lat: lat, lng: lng }}
      >
        {isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
      </GoogleMap>
    )
  })
)

Map.propTypes = propTypes
Map.defaultProps = defaultProps

const WrappedMap = props => (
  <Map
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8wUl_O19FPw6lOOnuuFFCJC0jXJrsIR8&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    {...props}
  />
)

export default WrappedMap
