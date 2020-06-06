import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

const Map = ({ center, zoom, onZoomChanged }) => {
  function handleZoomChanged() {
    onZoomChanged(this.getZoom());
  }

  return (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={center}
      onZoomChanged={handleZoomChanged}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
