const initialStore = {
  value: 0,
};
import { INCREASE_COUNTER } from "./constants";
export default function counterReducer(state = initialStore, action) {
  const { type } = action;
  const draft = { ...state };
  switch (type) {
    case INCREASE_COUNTER:
      draft.value++;
      break;
    case "DECREASE_COUNTER":
      draft.value--;
      break;
  }

  return draft;
}
