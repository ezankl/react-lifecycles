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
    console.log("%c getDerivedStateFromProps", "background: silver");
    if (props.time !== state.initial) {
      return {
        initial: props.time,
        time: props.time
      };
    }
    return null;
  }

  render() {
    console.log("%c render", "background: indianred");
    return <div>{this.state.time}</div>;
  }

  componentDidMount() {
    console.log("%c componentDidMount", "background: cadetblue");
    this.interval = setInterval(
      () => this.setState(state => ({ time: state.time + 1 })),
      5000
    );
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("%c shouldComponentUpdate", "background: seagreen");
    return newState.time % 2 === 0;
  }

  getSnapshotBeforeUpdate(oldProps, oldState) {
    console.log("%c getSnapshotBeforeUpdate", "background: gold");
    return Date.now();
  }

  componentDidUpdate(oldProps, oldState, snapshot) {
    console.log("%c componentDidUpdate", "background: plum");
    if (oldState.initial !== this.state.initial) {
      console.log(`${snapshot} Zeit wurde zurückgesetzt`);
    }
  }

  componentWillUnmount() {
    console.log("%c componentWillUnmount", "background: peru");
    clearInterval(this.interval);
  }
}
