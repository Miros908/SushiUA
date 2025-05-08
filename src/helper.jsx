import config from "../config";
export function formatPrice(value) {
  return value + " " + config.currency;
}
