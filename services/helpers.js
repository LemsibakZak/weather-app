import {
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime, timezone) =>
  unitSystem == "metric"
    ? new Date(currentTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: timezone })
    : timeTo12HourFormat(new Date(currentTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: timezone }));

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? new Date(currentTime).toLocaleTimeString('fr-FR', { hour12: true, timeZone: timezone }).split(' ')[1]
    : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(weatherData.current_weather.time).getDay()];
};