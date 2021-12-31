const speed = 40;
const missionData = {
  astro: ["...", "..."],
  bio: ["..."],
  physics: ["..."],
};

const checks = {
  maxSpeed: 50,
  minSpeed: 20,
  dataEntries: {
    astro: 2,
    bio: 1,
    physics: 1,
  },
};

const confirmReentryPlans = (speed, missionData, checks) => {
  console.log(`running shuttle re-entry checklist...\n`);
  if (speedCheck(speed, checks) && dataCheck(missionData, checks)) {
    console.log(`\nAll tests passed! Begin re-entry sequence.`);
    return true;
  }
  console.log(`\naborting re-entry sequence...`);
  return false;
};

const speedCheck = (actualSpeed, checks) => {
  const { maxSpeed, minSpeed } = checks;

  if (minSpeed < actualSpeed && actualSpeed < maxSpeed) {
    console.log(`- speed test: success`)
    return true;
  }
  console.log(`- speed test: fail`)
  return false;
};

const dataCheck = (missionData, checks) => {
  const parsedMissionData = parseMissionData(missionData);
  const { dataEntries } = checks;

  for (key in parsedMissionData) {
    if (parsedMissionData[key] != dataEntries[key]) {
      console.log(`- data entry test: fail`)
      return false;
    }
  }
  console.log(`- data entry test: success`)
  return true;
};

const parseMissionData = (missionData) => {
  const newMissionData = {};

  for (key in missionData) {
    newMissionData[key] = missionData[key].length;
  }

  return newMissionData;
};

confirmReentryPlans(speed, missionData, checks);
