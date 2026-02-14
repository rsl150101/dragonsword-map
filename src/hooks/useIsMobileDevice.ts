import { useState } from "react";

export function useIsMobileDevice() {
  const [isMobile] = useState(() => {
    if (typeof window === "undefined") return false;

    const userAgent = navigator.userAgent;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPhone|iPod/.test(userAgent);
    const isIPad = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 0;

    return isAndroid || isIOS || isIPad;
  });

  return isMobile;
}
