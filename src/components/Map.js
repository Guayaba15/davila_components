import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div align="center" className="container">
        <GoogleMaps
          apiKey={"AIzaSyB448spv6fUl0y06bJltIwqjNwKvF3_wk4"}
          style={{ height: "350px", width: "570px" }}
          zoom={12}
          center={{
            lat: 23.9901232,
            lng: -104.6197695
          }}
          markers={[{ lat: 23.9901183, lng: -104.6175808 }]}
        />
      </div>
    );
  }
}
