import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherData.weather.current_weather.time,
          weatherData.weather.timezone
        )} ${getAMPM(unitSystem, weatherData.weather.current_weather.time, weatherData.weather.timezone)}`}
      </h2>
    </div>
  );
};
