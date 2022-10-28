import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  togel = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const test = this.props.user
    console.log(test,'usercard')

    return (
      <div className="cards">
        <Card>
          <Card.Header className="cardHeader">{this.props.name}</Card.Header>
          <Card.Body>
            <div style={{ textAlign: "center" }}>
              <Card.Title className="cardTitle">
                {this.props.user.username}
              </Card.Title>
              <Card.Title style={{ color: "red" }}>
                {this.props.user.id}{" "}
              </Card.Title>
            </div>
            <Card.Text>
              Here's my email : <strong>"{this.props.user.email}"</strong>, my
              address is {this.props.user.address.street},{" "}
              {this.props.user.address.suite} in {this.props.user.address.city}{" "}
              - {this.props.user.address.zipcode} and to be exact here's
              <ul>
                <li>Latitude {this.props.user.address.geo.lat}</li>
                <li>Longitude {this.props.user.address.geo.lng}</li>
              </ul>
              <hr />
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => this.togel()}
              >
                Show more
              </button>
              <div>
                {this.state.show  && <Counter test ={test}  />}
                
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
