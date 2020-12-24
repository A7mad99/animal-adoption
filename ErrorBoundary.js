//mostly code from reactJS docs

import React from "react";
import { Link, Redirect } from "@reach/router";

//this will catch an error that occur in any children(render fallback UI after catching error)
class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedFromError() {
    return { hasError: true };
  }
  // componentDidCatch to log error info
  componentDidCatch(error, info) {
    console.error("ErrorBoundary", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError)
      setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          Error click <link to="/">here </link>to go back or wait five seconds
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
