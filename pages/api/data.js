import { defaultLocation } from "../../config";
import fs from "fs";

export default async function handler(req, res) {

  if(defaultLocation.latitude === undefined || defaultLocation.longitude === undefined) {
    const getCityData = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${defaultLocation.city}&language=en&count=1&format=json`
    );
    let dataCity = await getCityData.json();

    const configContent = 'export const defaultLocation = { latitude: ' + dataCity.results[0].latitude + ', longitude: ' + dataCity.results[0].longitude + ', city: "' + dataCity.results[0].name + '", country: "' + dataCity.results[0].country + '" };';

    fs.writeFileSync("config.js", configContent, (err) => {
      if (err) {
        console.error("Error writing to config.js:", err);
      } else {
        console.log("config.js has been updated successfully.");
      }
    });
  }
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${defaultLocation.latitude}&longitude=${defaultLocation.longitude}&current_weather=true&timezone=auto&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,visibility&daily=sunrise,sunset`
  );
  let dataWeather = await getWeatherData.json();

  const data =  dataWeather;
  console.log(data.hourly.apparent_temperature[1]);

  res.status(200).json(data);
}