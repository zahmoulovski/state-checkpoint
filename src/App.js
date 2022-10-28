import React, { Component } from "react";
import { list } from "./Data";
import UserList from "./UserList";
import Counter from "./Counter";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  togel = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <UserList users={list} />
      </div>
    );
  }
}
