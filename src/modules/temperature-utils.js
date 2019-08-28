const convertToCelciusUtil = (f) => Math.round((f - 32) / 1.8);
const convertToFahrenheitUtil = (c) => Math.round((c * 1.8) + 32);
export { convertToCelciusUtil, convertToFahrenheitUtil };
