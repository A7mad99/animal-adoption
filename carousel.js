import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  //getDrived take set of properties does some filtering on them then pass them to the component usedto reduce needless re-rendering
  static getDrivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      //photos will be array of urls
      //now we pick large imgs using map
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  handleIndexClick = (event) => {
    this.setState({
      //the plus sign is just like parsenInt (convert to int)
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              //i can pick the size of photo doing key=photo.large
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
