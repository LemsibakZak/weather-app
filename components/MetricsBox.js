import { degToCompass, getIndex } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
  indexOf,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.hourly.relative_humidity_2m[getIndex(weatherData.hourly.time, weatherData.current_weather.time, 3)]}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.current_weather.windspeed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.current_weather.winddirection)}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, weatherData.hourly.visibility[getIndex(weatherData.hourly.time, weatherData.current_weather.time, 3)])}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(
          unitSystem,
          weatherData.daily.sunrise[getIndex(weatherData.daily.sunrise, weatherData.current_weather.time, 6)],
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.daily.sunrise[getIndex(weatherData.daily.sunrise, weatherData.current_weather.time, 6)],
          weatherData.timezone
        )}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.daily.sunset[getIndex(weatherData.daily.sunset, weatherData.current_weather.time, 6)],
          weatherData.timezone
        )}
        unit={getAMPM(unitSystem, weatherData.daily.sunset[getIndex(weatherData.daily.sunset, weatherData.current_weather.time, 6)], weatherData.timezone)}
      />
    </div>
  );
};
