const exchanges = [
  { origin: "MC", message: "So how is it out there?" },
  { origin: "Shuttle", message: "Oh it's pretty nice!" },
  { origin: "MC", message: "Did you like the challenges?" },
];

const missionData = {
  astro: ["...", "..."],
  bio: ["..."],
  physics: ["..."],
};

const parseMissionSummary = (exchanges, missionData) => {
  return (missionSummary = {
    transcript: parseExchanges(exchanges),
    missionData: missionData,
  });
};

const parseExchanges = (exchanges) => {
  return exchanges.map((x) => {
    return `${x.origin}: ${x.message}`;
  });
};

parseMissionSummary(exchanges, missionData);