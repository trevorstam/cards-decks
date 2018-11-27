import React from "react";
import ReactDOM from "react-dom";
import Page from "../components/page/";
import content from "./content.json";

import styles from "../src/styles/styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content
    };
  }

  render() {
    return <Page content={this.state.content} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
