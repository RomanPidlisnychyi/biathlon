export const result = participants =>
  participants.map(participant => ({
    ...participant,
    lie: +parseFloat(getRandomArbitrary(85, 95)).toFixed(2),
    stand: +parseFloat(getRandomArbitrary(80, 95)).toFixed(2),
    speed: +parseFloat(getRandomArbitrary(25, 30)).toFixed(2),
  }));

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
