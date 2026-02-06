export function getLastWeeklyResetTime(): number {
  const now = new Date();
  const utcTimestamp = now.getTime();
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstDate = new Date(utcTimestamp + kstOffset);
  const day = kstDate.getUTCDay();

  const diffToMonday = day === 0 ? 6 : day - 1;

  kstDate.setUTCDate(kstDate.getUTCDate() - diffToMonday);
  kstDate.setUTCHours(9, 0, 0, 0);

  //   const diffToWednesday = (day + 7 - 3) % 7;

  //   kstDate.setUTCDate(kstDate.getUTCDate() - diffToWednesday);
  //   kstDate.setUTCHours(18, 43, 0, 0);

  // const diffToFriday = day >= 5 ? day - 5 : day + 2;

  // kstDate.setUTCDate(kstDate.getUTCDate() - diffToFriday);
  // kstDate.setUTCHours(20, 2, 0, 0);

  if (kstDate.getTime() > utcTimestamp + kstOffset) {
    kstDate.setUTCDate(kstDate.getUTCDate() - 7);
  }

  return kstDate.getTime() - kstOffset;
}
