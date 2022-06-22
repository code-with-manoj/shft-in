import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

class Map extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyAdIc2PvklBU0lJzIigZIj8dJtBrWYvVFI">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}
export default Map;
