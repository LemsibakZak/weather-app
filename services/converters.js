export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const codeWeather = (code) => {
  switch (code) {
    case 0:
      return { description: "Clear sky", icon: "01" };

    case 1:
    case 2:
    case 3:
      return { description: "Mainly clear, partly cloudy, and overcast", icon : "02" };

    case 45:
    case 48:
      return { description: "Fog and depositing rime fog" , icon : "50"};

    case 51:
    case 53:
    case 55:
      return { description: "Drizzle: Light, moderate, and dense intensity", icon: "09" };

    case 56:
    case 57:
      return { description: "Freezing Drizzle: Light and dense intensity", icon: "13" };

    case 61:
    case 63:
    case 65:
      return { description: "Rain: Slight, moderate and heavy intensity", icon: "10" };

    case 66:
    case 67:
      return { description: "Freezing Rain: Light and heavy intensity", icon: "13" };

    case 71:
    case 73:
    case 75:
      return { description: "Snow fall: Slight, moderate, and heavy intensity", icon: "13" };

    case 77:
      return { description: "Snow grains", icon: "13" };

    case 80:
    case 81:
    case 82:
      return { description: "Rain showers: Slight, moderate, and violent", icon: "09" };

    case 85:
    case 86:
      return { description: "Snow showers slight and heavy", icon: "13" };

    case 95:
      return { description: "Thunderstorm: Slight or moderate", icon: "11" };

    case 96:
    case 99:
      return { description: "Thunderstorm with slight and heavy hail", icon: "11" };
    default:
      return { description: "Unknown weather condition" };
  }
};
