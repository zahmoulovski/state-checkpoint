import React, { Component } from 'react'

export default class Counter extends Component {
constructor(props){
    super();
    this.state={
        time:0,
        intervall:null
    }
}
//life cycle 
componentDidMount(){
    console.log('this is for the first render');
    this.setState({
       intervall:setInterval(
        ()=> this.setState({time : this.state.time +1}),1000)
    })
}
 render() {
    return (
      <div>Counter
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}
