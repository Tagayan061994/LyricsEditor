//helper wich were using in top component
const SECONDS_PER_DAY = 86400;
const HOURS_PER_DAY = 24;

/**
 * Convert seconds to HH:MM:SS
 * If seconds exceeds 24 hours, hours will be greater than 24 (30:05:10)
 *
 * @param {number} seconds
 * @returns {string}
 */
export const parseSecondsToHms = (seconds) => {
   const days = Math.floor(seconds / SECONDS_PER_DAY);
   const remainderSeconds = seconds % SECONDS_PER_DAY;
   const hms = new Date(remainderSeconds * 1000).toISOString().substring(11, 19);
   return hms.replace(/^(\d+)/, (h) =>
      `${Number(h) + days * HOURS_PER_DAY}`.padStart(2, "0")
   );
};


/**
 * 
 * @param {*string} Hms 
 */
export const parseHmsToSeconds = (HMS) => {
   const hms = HMS;   // your input string
   const hmsArr = hms.split(':'); // split it at the colons

   // minutes are worth 60 seconds. Hours are worth 60 minutes.
   const seconds = (+hmsArr[0]) * 60 * 60 + (+hmsArr[1]) * 60 + (+hmsArr[2]);

   return seconds;
}



/**
 * 
 * @param {*number} fullWidthPx 
 * @param {*number} px 
 */

// Helpers wich were using in bottom component
export const ParsePxTopercent = (fullWidthPx, px) => {
   return (px * 100) / fullWidthPx;
}

export const ParsePercentToSecond = (fullSecond, percent) => {
   return (fullSecond * percent) / 100;
}

export const ParseSecondToPercent = (fullSecond, second) => {
   return (second * 100) / fullSecond;
}