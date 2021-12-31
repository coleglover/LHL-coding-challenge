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
  const missionSummary = {};

  const transcript = parseExchanges(exchanges);

  console.log(transcript);
};

const parseExchanges = (exchanges) => {
  return exchanges.map((x) => {
    return `${x.origin} ${x.message}`;
  });
  return transcript;

  // return exchanges.map((x) => {
  //   `${x.origin}: ${x.message}`
  //   //console.log(`${x.origin}: ${x.message}`)
  // });
};

parseMissionSummary(exchanges, missionData);
