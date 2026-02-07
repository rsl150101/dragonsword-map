import { GENERATORS } from "../../utils/markerFactory";
import type { IMarkerData } from "./types";

export const WEEKLY_MARKER: IMarkerData[] = [
  GENERATORS.WORLD_BOSS(1, [6247, 5592], { label: "폭군 카론" }),
  GENERATORS.WORLD_BOSS(2, [5349, 6008], { label: "갈증의 망령 파키루스" }),
  GENERATORS.WORLD_BOSS(3, [4925, 2758], { label: "긁어내는 브락" }),
  GENERATORS.WORLD_BOSS(4, [4053, 4918], { label: "동굴 포식자 안드라스" }),
  GENERATORS.WORLD_BOSS(5, [2311, 3152], {
    label: "배회하는 호르그",
    description: "연계 퀘스트 있음! 바로 위 지역 임무1",
    routeId: "wb_quest_1",
  }),

  GENERATORS.CRACK.DC(1, [2891, 3228]),
  GENERATORS.CRACK.DC(2, [4151, 4702]),
  GENERATORS.CRACK.DC(3, [2163, 3042]),
  GENERATORS.CRACK.DC(4, [4557, 3836]),
  GENERATORS.CRACK.DC(5, [3487, 3800]),

  GENERATORS.SURPRISE_MISSION.DC(1, [1834, 4010], {
    label: "기회주의자 그리믹",
    description: "연계 퀘스트 있음! 몬스터는 언덕 안에 있음",
  }),
  GENERATORS.SURPRISE_MISSION.DC(2, [1929, 3963], {
    label: "점화자 스닉락",
    description: "연계 퀘스트 있음! 몬스터는 언덕 안 중앙 기둥에 있음",
    routeId: "sm_quest_1",
  }),
  GENERATORS.SURPRISE_MISSION.DC(3, [2612, 2578], {
    label: "피범벅 크레즐",
    description: "연계 퀘스트 있음! 지역 임무 NPC 앞에 돌무더기 부수고 내려가면 있음",
    routeId: "sm_quest_2",
  }),
  GENERATORS.SURPRISE_MISSION.DC(4, [2716, 3369], {
    label: "해골머리 루카키",
    description: "연계 퀘스트 있음! 지역 임무 NPC 앞에 동굴 안에 있음",
    routeId: "sm_quest_3",
  }),
  GENERATORS.SURPRISE_MISSION.DC(5, [3163, 1946], {
    label: "부족 용사 바쉬",
    description: "연계 퀘스트 있음! ",
    routeId: "sm_quest_4",
  }),
  GENERATORS.SURPRISE_MISSION.DC(6, [3919, 4000], {
    label: "사나운 킁킁이",
    description: "연계 퀘스트 있음! ",
    routeId: "sm_quest_5",
  }),
  GENERATORS.SURPRISE_MISSION.DC(7, [4212, 4841], {
    label: "꿰뚫는 젝타르",
    description: "연계 퀘스트 있음! ",
    routeId: "sm_quest_6",
  }),
  GENERATORS.SURPRISE_MISSION.DC(8, [2005, 2820], {
    label: "굶주린 톱날의 크놀",
  }),
  GENERATORS.SURPRISE_MISSION.DC(9, [2595, 2653], {
    label: "묻힌 칼날 레스카",
    description: "건물 뒤 문 열고 들어 가면 있음",
  }),
  GENERATORS.SURPRISE_MISSION.DC(10, [3662, 3254], {
    label: "부식된 기사 칼바로스",
    description: "밤에만 나옴",
  }),
  GENERATORS.SURPRISE_MISSION.DC(11, [3552, 3895], {
    label: "미치광이 쿠아쿠",
  }),
  GENERATORS.SURPRISE_MISSION.DC(12, [3414, 4869], {
    label: "굶주린 사냥개 스나크",
  }),
  GENERATORS.SURPRISE_MISSION.DC(13, [4221, 2753], {
    label: "뼈 씹는 크레팰",
  }),
  GENERATORS.SURPRISE_MISSION.DC(14, [4808, 2581], {
    label: "불꽃 송곳니 브로카르",
  }),
  GENERATORS.SURPRISE_MISSION.DC(15, [5038, 2356], {
    label: "재간둥이 몽차차",
    description: "피 없으면 도망가서 피 채운다 끝까지 쫓아가자",
  }),
  GENERATORS.SURPRISE_MISSION.DC(16, [5379, 4920], {
    label: "산성 점액 드라젤",
  }),
  GENERATORS.SURPRISE_MISSION.DC(17, [5953, 5252], {
    label: "무너지는 대지 그롬카르",
    description: "바위 부족 기지 던전 타고 절벽 올라가면 있음",
  }),
  GENERATORS.SURPRISE_MISSION.DC(18, [6226, 5432], {
    label: "이단의 인도자 브라하임",
    description: "무너진 성역 던전 타고 내려가면 있음 소환수 무시하고 브라하임 잡을 것",
  }),

  GENERATORS.LOCAL_MISSION.DC(1, [2377, 3145], {
    description: "낮에만 등장하며 호르그 잡기 전에 미리 받자",
    routeId: "wb_quest_1",
  }),
  GENERATORS.LOCAL_MISSION.DC(2, [1892, 4025], {
    description: "점화자 스닉락 잡기 전에 미리 받자",
    routeId: "sm_quest_1",
  }),
  GENERATORS.LOCAL_MISSION.DC(3, [2612, 2517], {
    description: "피범벅 크레즐 잡기 전에 미리 받자",
    routeId: "sm_quest_2",
  }),
  GENERATORS.LOCAL_MISSION.DC(4, [2766, 3318], {
    description: "해골머리 루카키 잡기 전에 미리 받자",
    routeId: "sm_quest_3",
  }),
  GENERATORS.LOCAL_MISSION.DC(5, [3234, 1984], {
    description: "부족 용사 바쉬 잡기 전에 미리 받자",
    routeId: "sm_quest_4",
  }),
  GENERATORS.LOCAL_MISSION.DC(6, [3994, 3985], {
    description: "사나운 킁킁이 잡기 전에 미리 받자",
    routeId: "sm_quest_5",
  }),
  GENERATORS.LOCAL_MISSION.DC(7, [4107, 4753], {
    description: "꿰뚫는 젝타르 잡기 전에 미리 받자",
    routeId: "sm_quest_6",
  }),
  GENERATORS.LOCAL_MISSION.DC(8, [1587, 2886]),
  GENERATORS.LOCAL_MISSION.DC(9, [1841, 3365]),
  GENERATORS.LOCAL_MISSION.DC(10, [1815, 3511]),
  GENERATORS.LOCAL_MISSION.DC(11, [1864, 3504]),
  GENERATORS.LOCAL_MISSION.DC(12, [2281, 3747]),
  GENERATORS.LOCAL_MISSION.DC(13, [2198, 3616]),
  GENERATORS.LOCAL_MISSION.DC(14, [2266, 3036]),
  GENERATORS.LOCAL_MISSION.DC(15, [2476, 3604]),
  GENERATORS.LOCAL_MISSION.DC(16, [2595, 3382]),
  GENERATORS.LOCAL_MISSION.DC(17, [2706, 3387]),
  GENERATORS.LOCAL_MISSION.DC(18, [2754, 2878]),
  GENERATORS.LOCAL_MISSION.DC(19, [2555, 2851]),
  GENERATORS.LOCAL_MISSION.DC(20, [2949, 2576]),
  GENERATORS.LOCAL_MISSION.DC(21, [3293, 2071]),
  GENERATORS.LOCAL_MISSION.DC(22, [3098, 1845]),
  GENERATORS.LOCAL_MISSION.DC(23, [3018, 1726]),
  GENERATORS.LOCAL_MISSION.DC(24, [3035, 3014]),
  GENERATORS.LOCAL_MISSION.DC(25, [2994, 3533]),
  GENERATORS.LOCAL_MISSION.DC(26, [3190, 4266]),
  GENERATORS.LOCAL_MISSION.DC(27, [3549, 4251]),
  GENERATORS.LOCAL_MISSION.DC(28, [3518, 4547]),
  GENERATORS.LOCAL_MISSION.DC(29, [3714, 4776]),
  GENERATORS.LOCAL_MISSION.DC(30, [3960, 4646]),
  GENERATORS.LOCAL_MISSION.DC(31, [3912, 3623]),
  GENERATORS.LOCAL_MISSION.DC(32, [3976, 3620]),
  GENERATORS.LOCAL_MISSION.DC(33, [3932, 3613]),
  GENERATORS.LOCAL_MISSION.DC(34, [3909, 3251]),
  GENERATORS.LOCAL_MISSION.DC(35, [3872, 3196]),
  GENERATORS.LOCAL_MISSION.DC(36, [3843, 3197]),
  GENERATORS.LOCAL_MISSION.DC(37, [4419, 3154]),
  GENERATORS.LOCAL_MISSION.DC(38, [4672, 3330]),
  GENERATORS.LOCAL_MISSION.DC(39, [4589, 3523]),
  GENERATORS.LOCAL_MISSION.DC(40, [4920, 3437]),
  GENERATORS.LOCAL_MISSION.DC(41, [4838, 2411]),
  GENERATORS.LOCAL_MISSION.DC(42, [5949, 4971]),
  GENERATORS.LOCAL_MISSION.DC(43, [5703, 5855]),
  GENERATORS.LOCAL_MISSION.DC(44, [5885, 5841]),
  GENERATORS.LOCAL_MISSION.DC(45, [3174, 2935]),
  GENERATORS.LOCAL_MISSION.DC(46, [3174, 2886]),
  GENERATORS.LOCAL_MISSION.DC(47, [3206, 2910]),
  GENERATORS.LOCAL_MISSION.DC(48, [3300, 2882]),
  GENERATORS.LOCAL_MISSION.DC(49, [3255, 2833]),
  GENERATORS.LOCAL_MISSION.DC(50, [3214, 2786]),
  GENERATORS.LOCAL_MISSION.DC(51, [3225, 2746]),
  GENERATORS.LOCAL_MISSION.DC(52, [2564, 1886]),

  GENERATORS.GHOST.DC(1, [3023, 1978], {
    routeId: "ghost_west_1",
    description: "시작점 연못 근처",
  }),
  GENERATORS.GHOST.DC(2, [4897, 3734], {
    routeId: "ghost_north_1",
    description: "도착점 꼭대기에 있음",
  }),
  GENERATORS.GHOST.DC(3, [5538, 6128], { routeId: "ghost_ne_1" }),
  GENERATORS.GHOST.DC(4, [1995, 4021], { routeId: "ghost_south_1" }),
  GENERATORS.GHOST.DC(5, [1408, 2453], { routeId: "ghost_sw_1" }),
];
