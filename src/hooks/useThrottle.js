import { useRef } from 'react';

export function useLeadingThrottle(func, throttleTime) {
  const throttleStateRef = useRef();
  const throttledFunction = (args) => {
    const throttleState = throttleStateRef.current;

    if (throttleState) return;

    throttleStateRef.current = true;

    setTimeout(() => {
      func(args);
      throttleStateRef.current = false;
    }, throttleTime);
  };

  return throttledFunction;
}

export function useTrailingThrottle(func, throttleTime) {
  const throttleStateRef = useRef();
  const throttledFunction = (args) => {
    const throttleState = throttleStateRef.current;

    if (throttleState) return;

    func(args);

    throttleStateRef.current = true;
    setTimeout(() => {
      throttleStateRef.current = false;
    }, throttleTime);
  };
  return throttledFunction;
}
