export const prepearHeadTable = races => {
  let headTable;
  if (races && races.length) {
    headTable = Object.keys(races[0]);
  }
  return headTable;
};
