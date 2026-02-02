import { useState, useEffect } from "react";
import { RESPAWN_TIMES } from "../features/map/data/mapFilters";

export function useRespawnTimer(collectedAt: number | undefined, type: string) {
  const duration = RESPAWN_TIMES[type];
  const isValid = collectedAt && duration;

  const [timeLeft, setTimeLeft] = useState(() => {
    if (!isValid) return "";
    return "계산 중...";
  });
  const [isRespawned, setIsRespawned] = useState(false);

  useEffect(() => {
    if (!isValid) {
      return;
    }

    const targetTime = collectedAt + duration;

    const tick = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setIsRespawned(true);
        setTimeLeft("리젠 완료!");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const hStr = hours > 0 ? `${hours}시간 ` : "";
      const mStr = `${minutes}분`;
      const sStr = `${seconds}초`;

      setTimeLeft(`${hStr}${mStr} ${sStr} 후 리젠`);
      setIsRespawned(false);
    };

    tick();
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [collectedAt, duration, isValid]);

  return {
    timeLeft: isValid ? timeLeft : "",
    isRespawned: isValid ? isRespawned : false,
  };
}
