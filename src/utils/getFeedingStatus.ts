export const getFeedingStatus = (lastFed: Date): "Mätt" | "Snart hungrig" | "Behöver mat" => {
  const now = new Date().getTime();
  const fedTime = new Date(lastFed).getTime();
  const hoursSinceFed = (now - fedTime) / (1000 * 60 * 60);

  if (hoursSinceFed >= 5) return "Behöver mat";
  if (hoursSinceFed >= 3) return "Snart hungrig";
  return "Mätt";
};