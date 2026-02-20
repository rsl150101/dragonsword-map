import { GENERATORS } from "../../utils/markerFactory";
import type { IMarkerData } from "./types";

export const WEEKLY_MARKER: IMarkerData[] = [
  GENERATORS.WORLD_BOSS(1, [6247, 5592], { label: "폭군 카론" }),
  GENERATORS.WORLD_BOSS(2, [5349, 6008], { label: "갈증의 망령 파키루스" }),
  GENERATORS.WORLD_BOSS(3, [4935, 2792], { label: "긁어내는 브락" }),
  GENERATORS.WORLD_BOSS(4, [4053, 4918], { label: "동굴 포식자 안드라스" }),
  GENERATORS.WORLD_BOSS(5, [2311, 3152], {
    label: "배회하는 호르그",
    description: "연계 퀘스트 있음! 바로 위 지역 임무1",
    routeId: "wb_quest_1",
  }),
  GENERATORS.WORLD_BOSS(6, [6287, 4421], {
    label: "어둠의 사령술사 하겐",
    description: "여신상 아래층",
  }),

  GENERATORS.CRACK.DC(1, [2908, 3228]),
  GENERATORS.CRACK.DC(2, [4151, 4702]),
  GENERATORS.CRACK.DC(3, [2213, 3022]),
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
  GENERATORS.SURPRISE_MISSION.DC(9, [2555, 2585], {
    label: "묻힌 칼날 레스카",
    description: "무너진 풍차 뒤 문 열고 들어 가면 있음",
    routeId: "surprise_mission_resca",
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
  GENERATORS.SURPRISE_MISSION.DEFAULT(19, [5835, 3525], {
    label: "땅을 가르는 크래그모",
  }),
  GENERATORS.SURPRISE_MISSION.DEFAULT(20, [6370, 2253], {
    label: "야성의 날개 바르곤",
  }),
  GENERATORS.SURPRISE_MISSION.DEFAULT(21, [7211, 2460], {
    label: "모래갈퀴 드라그스",
  }),
  GENERATORS.SURPRISE_MISSION.DEFAULT(22, [6250, 4316], {
    label: "공허의 어스름 노르",
  }),
  GENERATORS.SURPRISE_MISSION.DEFAULT(23, [6266, 4544], {
    label: "희미한 장막 쉐르",
  }),
  GENERATORS.SURPRISE_MISSION.DEFAULT(24, [5878, 4306], {
    label: "인도하는 젤무어",
    description: "워프 아래층에 있음 유체화 상태일 때 계속 때리면 풀림",
  }),

  GENERATORS.LOCAL_MISSION.DC(1, [2377, 3145], {
    label: "지역 임무 1 용병 바크 올타 소르자",
    description: "낮에만 등장하며 호르그 잡기 전에 미리 받자",
    routeId: "wb_quest_1",
  }),
  GENERATORS.LOCAL_MISSION.DC(2, [1892, 4025], {
    label: "지역 임무 2 현상금 사냥꾼 웰던",
    description: "점화자 스닉락 잡기 전에 미리 받자",
    routeId: "sm_quest_1",
  }),
  GENERATORS.LOCAL_MISSION.DC(3, [2612, 2517], {
    label: "지역 임무 3 현상금 사냥꾼 웰던",
    description: "피범벅 크레즐 잡기 전에 미리 받자",
    routeId: "sm_quest_2",
  }),
  GENERATORS.LOCAL_MISSION.DC(4, [2766, 3318], {
    label: "지역 임무 4 현상금 사냥꾼 웰던",
    description: "해골머리 루카키 잡기 전에 미리 받자",
    routeId: "sm_quest_3",
  }),
  GENERATORS.LOCAL_MISSION.DC(5, [3234, 1984], {
    label: "지역 임무 5 현상금 사냥꾼 웰던",
    description: "부족 용사 바쉬 잡기 전에 미리 받자",
    routeId: "sm_quest_4",
  }),
  GENERATORS.LOCAL_MISSION.DC(6, [3994, 3985], {
    label: "지역 임무 6 현상금 사냥꾼 웰던",
    description: "사나운 킁킁이 잡기 전에 미리 받자",
    routeId: "sm_quest_5",
  }),
  GENERATORS.LOCAL_MISSION.DC(7, [4107, 4753], {
    label: "지역 임무 7 현상금 사냥꾼 웰던",
    description: "꿰뚫는 젝타르 잡기 전에 미리 받자",
    routeId: "sm_quest_6",
  }),
  GENERATORS.LOCAL_MISSION.DC(8, [1587, 2886], {
    label: "지역 임무 8 정보원 로파이",
    description: "나무통 옮기기",
  }),
  GENERATORS.LOCAL_MISSION.DC(9, [1841, 3365], {
    label: "지역 임무 9 라넨",
    description: "곰인형 가져다주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(10, [1815, 3511], {
    label: "지역 임무 10 드라본",
    description: "2성 해산물 플래터(굽기: 생선 + 해산물 합3) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(11, [1864, 3504], {
    label: "지역 임무 11 오렌시아",
    description: "지역 임무 9 라넨 있는 집에 생선 갖다 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(12, [2281, 3747], {
    label: "지역 임무 12 정보원 로파이",
    description: "나무상자 옮기기",
  }),
  GENERATORS.LOCAL_MISSION.DC(13, [2198, 3616], {
    label: "지역 임무 13 초보 용병 에리나 다인",
    description: "배낭 찾기",
  }),
  GENERATORS.LOCAL_MISSION.DC(14, [2266, 3036], {
    label: "지역 임무 14 배고픈 모험가 스티브",
    description: "3성 콩소메(끓이기: 맷돼지고기 + 짐승고기 + 버섯 합6) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(15, [2476, 3604], {
    label: "지역 임무 15 배고픈 모험가 스티브",
    description: "2성 해산물 세비체(썰기: 밀 + 모레게) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(16, [2595, 3382], {
    label: "지역 임무 16 정보원 로파이",
    description: "나무통 옮기기",
  }),
  GENERATORS.LOCAL_MISSION.DC(17, [2706, 3387], {
    label: "지역 임무 17 초보 용병 에리나 다인",
    description: "배낭 찾기 풍차에 있는 새알 옆에 있음",
  }),
  GENERATORS.LOCAL_MISSION.DC(18, [2754, 2878], {
    label: "지역 임무 18 소냐",
    description: "남편 찾기",
  }),
  GENERATORS.LOCAL_MISSION.DC(19, [2555, 2851], {
    label: "지역 임무 19 초보 용병 에리나 다인",
    description: "배낭 찾기 깨달음의 샘 중앙 쪽",
  }),
  GENERATORS.LOCAL_MISSION.DC(20, [2949, 2576], {
    label: "지역 임무 20 배고픈 모험가 스티브",
    description: "2성 버섯 스프(끓이기: 버섯 + 채소 합3) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(21, [3293, 2071], {
    label: "지역 임무 21 초보 용병 에리나 다인",
    description: "배낭 찾기 고블린 소굴 입구 쪽",
  }),
  GENERATORS.LOCAL_MISSION.DC(22, [3098, 1845], {
    label: "지역 임무 22 배고픈 모험가 스티브",
    description: "3성 육회(썰기: 고기 합6) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(23, [3018, 1726], {
    label: "지역 임무 23 정보원 로파이",
    description: "나무궤짝 옮기기",
  }),
  GENERATORS.LOCAL_MISSION.DC(24, [3035, 3014], {
    label: "지역 임무 24 엘리",
    description: "양 가져다주기 농장 쪽 길 따라 가면 있음",
  }),
  GENERATORS.LOCAL_MISSION.DC(25, [2994, 3533], {
    label: "지역 임무 25 베테랑 용병 이디스",
    description: "마물 잡기",
  }),
  GENERATORS.LOCAL_MISSION.DC(26, [3190, 4266], {
    label: "지역 임무 26 정보원 로파이",
    description: "나무상자 갖다 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(27, [3549, 4251], {
    label: "지역 임무 27 에이든",
    description: "망루 보초병 3명 감시하기",
  }),
  GENERATORS.LOCAL_MISSION.DC(28, [3518, 4547], {
    label: "지역 임무 28 배고픈 모험가 스티브",
    description: "3성 오믈렛(굽기: 새알 + 채소 + 버섯 합6) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(29, [3714, 4776], {
    label: "지역 임무 29 하인 피오",
    description: "아가씨 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(30, [3960, 4646], {
    label: "지역 임무 30 부상당한 병사",
    description: "남겨진 동료 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(31, [3912, 3623], {
    label: "지역 임무 31 열혈 요리사 람지",
    description: "마물 처치하고 버섯 찾기",
  }),
  GENERATORS.LOCAL_MISSION.DC(32, [3976, 3620], {
    label: "지역 임무 32 비토",
    description: "예배 불참석자 3명 찾아가기",
  }),
  GENERATORS.LOCAL_MISSION.DC(33, [3932, 3613], {
    label: "지역 임무 33 말로스",
    description: "창 되찾아오기 지역 임무 31 버섯 옆 부서직 유적 파편 쪽",
  }),
  GENERATORS.LOCAL_MISSION.DC(34, [3909, 3251], {
    label: "지역 임무 34 헤리안",
    description: "취객 몰아내기",
  }),
  GENERATORS.LOCAL_MISSION.DC(35, [3872, 3196], {
    label: "지역 임무 35 사리안",
    description: "시식평 듣기",
  }),
  GENERATORS.LOCAL_MISSION.DC(36, [3843, 3197], {
    label: "지역 임무 36 다르반",
    description: "2성 구운 고기(굽기: 고기 합3) 주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(37, [4419, 3154], {
    label: "지역 임무 37 하인 피오",
    description: "아가씨 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(38, [4672, 3330], {
    label: "지역 임무 38 디온스",
    description: "초소까지 호위",
  }),
  GENERATORS.LOCAL_MISSION.DC(39, [4589, 3523], {
    label: "지역 임무 39 부상당한 병사",
    description: "남겨진 동료 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(40, [4920, 3437], {
    label: "지역 임무 40 엘렌",
    description: "가방 찾기",
  }),
  GENERATORS.LOCAL_MISSION.DC(41, [4870, 2411], {
    label: "지역 임무 41 부상당한 병사",
    description: "남겨진 동료 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(42, [5949, 4971], {
    label: "지역 임무 42 하인 피오",
    description: "아가씨 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(43, [5703, 5855], {
    label: "지역 임무 43 하인 피오",
    description: "아가씨 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(44, [5885, 5841], {
    label: "지역 임무 44 부상당한 병사",
    description: "남겨진 동료 구출",
  }),
  GENERATORS.LOCAL_MISSION.DC(45, [3174, 2935], {
    label: "지역 임무 45 다니얼",
    description: "곡식 자루 옮기기",
  }),
  GENERATORS.LOCAL_MISSION.DC(46, [3174, 2886], {
    label: "지역 임무 46 이리나",
    description: "숨은 쌍둥이 3명 찾기",
  }),
  GENERATORS.LOCAL_MISSION.DC(47, [3206, 2910], {
    label: "지역 임무 47 셀미아",
    description: "고블린이 훔쳐간 곡식 자루 갖다주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(48, [3300, 2882], {
    label: "지역 임무 48 허슬린",
    description: "아우 몰래 곡식 자루 집에 갖다주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(49, [3255, 2833], {
    label: "지역 임무 49 니올라",
    description: "호박 3개 수레에 옮기기",
  }),
  GENERATORS.LOCAL_MISSION.DC(50, [3214, 2786], {
    label: "지역 임무 50 페리엔",
    description: "집 안, 집 밖 빨래통 갖다주기",
  }),
  GENERATORS.LOCAL_MISSION.DC(51, [3225, 2746], {
    label: "지역 임무 51 다렌",
    description: "와르그 처치",
  }),
  GENERATORS.LOCAL_MISSION.DC(52, [2564, 1886], {
    label: "지역 임무 52 초보 용병 에리나 다인",
    description: "배낭 찾기 절벽 위 나무 쪽에 있음",
  }),
  GENERATORS.LOCAL_MISSION.DEFAULT(53, [5852, 3519], {
    label: "지역 임무 53 현상금 사냥꾼 웰던",
    description: "땅을 가르는 크래그모 잡기 전에 미리 받자",
  }),
  GENERATORS.LOCAL_MISSION.DEFAULT(54, [6113, 3403], {
    label: "지역 임무 54 타일러",
    description: "바위 위가 정답",
  }),
  GENERATORS.LOCAL_MISSION.DEFAULT(55, [5456, 3313], {
    label: "지역 임무 55 타일러",
    description: "바위 위가 정답",
  }),
  GENERATORS.LOCAL_MISSION.DEFAULT(56, [5463, 2810], {
    label: "지역 임무 56 부상당한 병사",
    description: "남겨진 동료 구출",
  }),
  GENERATORS.LOCAL_MISSION.DEFAULT(57, [5244, 2717], {
    label: "지역 임무 57 정보원 로파이",
    description: "워프 옆 지하에서 나무 상자 갖다주기",
  }),
  GENERATORS.LOCAL_MISSION.DEFAULT(58, [5964, 2448], {
    label: "지역 임무 58 하인 피오",
    description: "아가씨 구출",
  }),

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
  GENERATORS.GHOST.DEFAULT(6, [5758, 4248], { routeId: "ghost_first_release_north_1" }),
];
