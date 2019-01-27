import React, { Component } from "react";

class Pet extends Component {
  render() {
    const { name, media } = this.props;
    let photos =
      media && media.photos && media.photos.photo
        ? media.photos.photo.filter(photo => photo["@size"] === "pn")
        : null;
    return (
      <img
        className="col-md-3 p-5"
        src={photos && photos[0].value}
        alt={name}
      />
    );
  }
}

export default Pet;
