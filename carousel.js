import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  handleIndexClick = (event) => {
    this.setState({
      //the plus sign is just like parsenInt (convert to int)
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { media } = this.props;
    return (
      // this was smadi work
      <div className="carousel">
        <img src={media[active].large} alt="animal" />
        <div className="carousel-smaller">
          {media.map((photo, index) => (
            //eslint-disable-next-line
            <img
              //i can pick the size of photo doing key=photo.large
              key={index}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo.medium}
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
