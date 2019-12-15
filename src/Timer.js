import * as React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      initial: 0,
      time: 0
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("%c getDiredStateFromProps", "background: #bada55");
    if (props.time !== state.initial) {
      return {
        initial: props.time,
        time: props.time
      };
    }
    return null;
  }

  render() {
    console.log("%c render", "background: #0394fc");
    return <div>{this.state.time}</div>;
  }

  componentDidMount() {
    console.log("%c componentDidMount", "background: #fc9403");
    this.interval = setInterval(
      () => this.setState(state => ({ time: state.time + 1 })),
      5000
    );
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("%c shouldComponentUpdate", "background: #e03838");
    return newState.time % 2 === 0;
  }

  getSnapshotBeforeUpdate(oldProps, oldState) {
    console.log("%c getSnapshotBeforeUpdate", "background: #03fc77");
    return Date.now();
  }

  componentDidUpdate(oldProps, oldState, snapshot) {
    console.log("%c componentDidUpdate", "background: #068c39");
    if (oldState.initial !== this.state.initial) {
      console.log(`${snapshot} Zeit wurde zurückgesetzt`);
    }
  }

  componentWillUnmount() {
    console.log("%c componentWillUnmount", "background: #79869c");
    clearInterval(this.interval);
  }
}
