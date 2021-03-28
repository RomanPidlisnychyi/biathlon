export const result = participants =>
  participants.map(participant => {
    const lie = +parseFloat(getRandomArbitrary(85, 95)).toFixed(2);
    const stand = +parseFloat(getRandomArbitrary(80, 95)).toFixed(2);
    const general = +parseFloat((lie + stand) / 2).toFixed(2);
    const speed = +parseFloat(getRandomArbitrary(25, 30)).toFixed(2);

    return {
      ...participant,
      lie,
      stand,
      general,
      speed,
    };
  });

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
