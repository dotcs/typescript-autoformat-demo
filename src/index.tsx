import * as React from "react";
import { render } from "react-dom";
import { clearInterval } from "timers";

interface ClockState { time: Date; }

class Clock extends React.Component<
  {}, ClockState> {
  timer: number | null = null;

  state: ClockState = { time: new Date()
  };

  componentDidMount() {
    this.timer = window.setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    if (this.timer !== null)
      window.clearInterval(this.timer);
  }

  updateTime = () => {
    this.setState({ time: new Date() });
  };

  render() {
    const { time } = this.state;
    const timeString = time
      .toISOString();
    return <span>{timeString}</span>;
  }
}

render(
  <Clock />, 
  document.getElementById("root")
);
