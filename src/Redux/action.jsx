import { INCREASE_COUNTER } from "./constants";
export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}

export function decreaseCounter() {
  return {
    type: "DECREASE_COUNTER",
  };
}
