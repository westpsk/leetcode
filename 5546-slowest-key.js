/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = function (releaseTimes, keysPressed) {
  let maxTime = releaseTimes[0];
  let resKey = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    let time = releaseTimes[i] - releaseTimes[i - 1];
    if (time > maxTime) {
      maxTime = time;
      resKey = keysPressed[i];
    } else if (time === maxTime) {
      resKey = helper(keysPressed[i], resKey);
    }
  }
  return resKey;
};

const helper = (a, b) => {
  if (a.charCodeAt() > b.charCodeAt()) {
    return a;
  } else {
    return b;
  }
};

let releaseTimes = [12, 23, 36, 46, 62];
let keysPressed = "spuda";
const res = slowestKey(releaseTimes, keysPressed);
console.log(res);
