import React from "react";
import pet from "@frontendmasters/pet";
import carousel from "./carousel";
import ErrorBoundary from "./ErrorBoundary";
import themeContext from "./themeContext";

class Details extends React.Component {
  //use babel to shorten state loading
  state = { loading: true };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        //calling setState to update this.state for one time bcuz of didMount
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} -${breed}-${location}`}</h2>
          <themeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </themeContext.Consumer>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
