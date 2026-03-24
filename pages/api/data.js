export default async function handler(req, res) {
  const { cityInput } = req.body;

  
    const getCityData = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&language=en&count=1&format=json`
    );
    let dataCity = await getCityData.json();

    if (!dataCity.results || dataCity.results.length === 0) {
      return res.status(404).json({ message: "City not found" });
    }

    const getWeatherData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${dataCity.results[0].latitude}&longitude=${dataCity.results[0].longitude}&current_weather=true&timezone=auto`
    );
    let dataWeather = await getWeatherData.json();

    const data = { city: dataCity.results[0], weather: dataWeather };
    res.status(200).json(data);
}