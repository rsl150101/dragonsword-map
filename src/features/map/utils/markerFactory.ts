import { FaCircle } from "react-icons/fa";
import type { IMarkerData } from "../data/mapMarkers/types";

const TYPE_NAMES: Record<string, string> = {
  warp: "워프포인트",
  statue: "여신상",
  windmill: "에오나",
  squirrel: "다람쥐",
  potato: "감자",
  blue_lotus_mushroom: "푸른 연꽃 버섯",
  goose_egg: "거위 알",
  round_eggplant: "동글가지",
  marmot: "미니게임",
  puzzle: "퍼즐",
  special_chest: "달의 상자",
  ghost: "유령",
  local_mission: "지역 임무",
  crack: "균열",
  leaf_tomato: "잎새 토마토",
  memories_crystal: "추억의 결정",
  recollection_crystal: "회상의 결정",
  remembrance_crystal: "기억의 결정",
  oblivion_crystal: "망각의 결정",
};

const createMarker =
  (type: string, defaultProps: Partial<IMarkerData> = {}) =>
  (
    idNum: number | string,
    position: [number, number],
    extra: Partial<IMarkerData> = {},
  ): IMarkerData => {
    const baseName = TYPE_NAMES[type];
    const marker: IMarkerData = {
      id: `${type}_${idNum}`,
      type,
      label: extra.label || `${baseName} ${idNum}`,
      position,
      ...defaultProps,
      ...extra,
    };

    const effectiveRouteId = extra.routeId || defaultProps.routeId;

    if (effectiveRouteId && typeof idNum === "number") {
      marker.routeOrder = extra.routeOrder ?? idNum;
    }

    return marker;
  };

export const GENERATORS = {
  WARP: createMarker("warp"),
  STATUE: createMarker("statue"),
  MERCHANT: createMarker("merchant"),
  WINDMILL: createMarker("windmill"),
  BUILDING: createMarker("building"),
  WORKSHOP: createMarker("workshop"),

  DUNGEON: createMarker("dungeon"),
  MATERIAL_DUNGEON: createMarker("material_dungeon"),
  TRAIT_DUNGEON: createMarker("trait_dungeon"),

  WORLD_BOSS: createMarker("world_boss"),
  CRACK: {
    DC: createMarker("crack", {
      description: "5곳 랜덤 순서로 등장",
      author: "(주간퀘)돌발 의뢰, 토벌 임무 정리 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=9197",
    }),
  },
  SURPRISE_MISSION: {
    DC: createMarker("surprise_mission", {
      author: "(주간퀘)돌발 의뢰, 토벌 임무 정리 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=9197",
    }),
  },
  GHOST: {
    DC: createMarker("ghost", {
      author: "(주간퀘)돌발 의뢰, 토벌 임무 정리 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=9197",
    }),
  },
  WAYPOINT_GHOST: createMarker("waypoint_ghost", { icon: FaCircle, color: "#DFE6E9" }),
  LOCAL_MISSION: {
    DC: createMarker("local_mission", {
      author: "(주간퀘)돌발 의뢰, 토벌 임무 정리 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=9197",
    }),
  },

  SQUIRREL: {
    OFFICIAL: createMarker("squirrel", {
      author: "다람쥐 런 - 공식 커뮤니티",
      sourceUrl: "https://dragonsword.webzen.co.kr/board/1079/detail/386380",
    }),
  },
  POTATO: {
    DC: createMarker("potato", {
      author: "감자런 뛰기 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=4544",
    }),
  },
  BLUE_LOTUS_MUSHROOM: {
    DC: createMarker("blue_lotus_mushroom", {
      author: "[3성 버섯]푸른 연꽃 버섯 파밍 경로 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=4561",
    }),
  },
  GOOSE_EGG: {
    DC: createMarker("goose_egg", {
      author: "⭐3 식재료 거위알 스폰 위치 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=8513",
    }),
  },
  ROUND_EGGPLANT: {
    DC: createMarker("round_eggplant", {
      author: "⭐3 채소 동글가지 스폰 위치 모음 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=8101",
    }),
  },
  LEAF_TOMATO: {
    OFFICIAL: createMarker("leaf_tomato", {
      author: "잎새 토마토 메아리 협로 위치입니다. - 공식 커뮤니티",
      sourceUrl: "https://dragonsword.webzen.co.kr/board/1079/detail/387160",
    }),
  },

  MARMOT: {
    DC: createMarker("marmot", {
      author: "퍼즐, 마멋 위치 공유 [완] - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=2342",
    }),
  },
  PUZZLE: {
    DC: createMarker("puzzle", {
      author: "퍼즐, 마멋 위치 공유 [완] - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=2342",
    }),
  },
  SPECIAL_CHEST: {
    DC: createMarker("special_chest", {
      author: "달의 열쇠 상자 총31개 - 디시인사이드",
      sourceUrl: "https://gall.dcinside.com/mgallery/board/view/?id=dragonsword&no=7239",
    }),
  },
  WAYPOINT_SPECIAL_CHEST: createMarker("waypoint_special_chest", { icon: FaCircle }),
  // TREASURE_CHEST: createMarker("treasure_chest"),
  // WAYPOINT_TREASURE_CHEST: createMarker("treasure_chest", { icon: FaCircle }),

  MEMORIES_CRYSTAL: {
    OFFICIAL: createMarker("memories_crystal", {
      author: "추억/회상/기억/망각 결정 위치 공략 - 공식 커뮤니티",
      sourceUrl: "https://dragonsword.webzen.co.kr/board/1079/detail/385931",
    }),
  },
  RECOLLECTION_CRYSTAL: {
    OFFICIAL: createMarker("recollection_crystal", {
      author: "추억/회상/기억/망각 결정 위치 공략 - 공식 커뮤니티",
      sourceUrl: "https://dragonsword.webzen.co.kr/board/1079/detail/385931",
    }),
  },
  REMEMBRANCE_CRYSTAL: {
    OFFICIAL: createMarker("remembrance_crystal", {
      author: "추억/회상/기억/망각 결정 위치 공략 - 공식 커뮤니티",
      sourceUrl: "https://dragonsword.webzen.co.kr/board/1079/detail/385931",
    }),
  },
  OBLIVION_CRYSTAL: {
    OFFICIAL: createMarker("oblivion_crystal", {
      author: "추억/회상/기억/망각 결정 위치 공략 - 공식 커뮤니티",
      sourceUrl: "https://dragonsword.webzen.co.kr/board/1079/detail/385931",
    }),
  },
  WAYPOINT_OBLIVION_CRYSTAL: createMarker("waypoint_oblivion_crystal", {
    icon: FaCircle,
  }),
};
