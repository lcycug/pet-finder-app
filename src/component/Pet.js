import React, { Component } from "react";

class Pet extends Component {
  render() {
    const { name, lcoation, breeds, media, animal } = this.props;
    let photos =
      media && media.photos && media.photos.photo
        ? media.photos.photo.filter(photo => photo["@size"] === "pn")
        : null;
    return (
      <div className="row">
        <div className="animal-avatar">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="col-5">
          <label htmlFor="name">Name: </label>
          <span name="name">{name}</span>
        </div>
        <div className="col-2">{animal}</div>
        <div className="col-5">
          {breeds && breeds.breed
            ? Array.isArray(breeds.breed)
              ? breeds.breed.join(", ")
              : breeds.breed
            : null}
        </div>
      </div>
    );
  }
}

export default Pet;
