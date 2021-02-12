/**
 * Convert seconds to HH:MM:SS
 * If seconds exceeds 24 hours, hours will be greater than 24 (30:05:10)
 *
 * @param {number} seconds
 * @returns {string}
 */
// export const parseSecondsToHms = (seconds) => {
//    const hours = Math.floor(seconds / 3600).padStart(2, "0")

//    let reminder = seconds - hours * 3600;
//    const minutes = (Math.floor(reminder / 60)).padStart(2, "0")

//    reminder = reminder - minutes * 60
//    const sec = Math.floor(reminder).padStart(2, "0")

//    return `${hours}:${minutes}:${sec}`
// };

export const parseSecondsToHms = (seconds) => {
  let numParsedSec = Number(seconds);
  const hourse = Math.floor(numParsedSec / 3600);
  const minutes = Math.floor((numParsedSec % 3600) / 60);
  const second = Math.floor((numParsedSec % 3600) % 60);
  return (
    ("0" + hourse).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + second).slice(-2)
  );
};

/**
 * Convert HMS time to string
 * @param {*string} Hms e.g. 01:30:20
 */
export const parseHmsToSeconds = (hms) => {
  const [hours, minutes, seconds] = hms.split(":");
  return hours * 60 * 60 + minutes * 60 + parseInt(seconds);
};

// Helpers wich were using in bottom component
export const calcWhatPercent = (full, part) => (part * 100) / full;

export const parsePxTopercent = calcWhatPercent;
export const parseSecondToPercent = calcWhatPercent;

export const parsePercentToSecond = (fullSecond, percent) =>
  (fullSecond * percent) / 100;
