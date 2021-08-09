import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useState, useRef } from "react";

function ClickApp() {
  const [count, setCount] = useState(0);
  const [trackingClicks, setTrackingClicks] = useState(false);
  const [maxClicksPerSecond, setMaxClicksPerSecond] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  const maxClicksPerSecondRef = useRef(maxClicksPerSecond);
  maxClicksPerSecondRef.current = maxClicksPerSecond;

  function trackPerSecond() {
    setTrackingClicks(true);
    setTimeout(() => {
      if (
        maxClicksPerSecondRef.current === 0 ||
        maxClicksPerSecondRef.current < countRef.current
      ) {
        setMaxClicksPerSecond(countRef.current);
      }
      setCount(0);
      setTrackingClicks(false);
    }, 1000);
  }

  function handleClick() {
    if (!trackingClicks) {
      trackPerSecond();
    }
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Clicks Per Second</h1>
      <ClickButton
        count={count}
        onClick={handleClick}
        number={maxClicksPerSecond}
      />
    </div>
  );
}

function ClickButton(props) {
  return (
    <div>
      <Button onClick={props.onClick}>You clicked {props.count} times.</Button>
      <h1>
        Max per second: <Badge>{props.number}</Badge>
      </h1>
    </div>
  );
}

export default ClickApp;
