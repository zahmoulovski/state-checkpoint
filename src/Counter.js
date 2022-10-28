import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      intervall: null
    };
  }
  //life cycle
  componentDidMount() {
    console.log("this is for the first render");
    this.setState({
      intervall: setInterval(
        () => this.setState({ time: this.state.time + 1 }),
        1000
      )
    });
  }
  render() {
    console.log('counter',this.props.test)
    return (
      <div>
        You're reading this for :<h1>{this.state.time}s</h1>
        <div>
                  <p>
                    I'm an employer at {this.props.test.company.name}, that it
                    has one of the cooloest catch phrases :
                    <strong>"{this.props.test.company.catchPhrase}"</strong>,
                    and our services are :
                  </p>
                  <ul>
                    <li>{this.props.test.company.bs}</li>
                  </ul>
                </div>
      </div>
    );
  }
}
