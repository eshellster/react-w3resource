import React, { Component } from "react";

const Hoc = (HocComponent, data) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }

    render() {
      return <HocComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default Hoc;
