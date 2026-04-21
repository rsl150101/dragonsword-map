# DragonSword Map (드래곤소드 지도)

드래곤소드(DragonSword) 게임 플레이를 위한 웹 기반 인터랙티브 지도 도구입니다. 각종 게임 내 자원, 임무, 거점 등을 시각적으로 확인하고 관리할 수 있습니다.

## 🚀 주요 기능

- **인터랙티브 월드 맵**: Leaflet을 활용한 부드러운 지도 탐색 및 줌 기능.
- **카테고리별 필터링**:
  - **주간 숙제**: 월드 보스, 균열, 돌발 임무, 지역 임무, 유령 등.
  - **탐험/보물**: 미니게임, 퍼즐, 달의 상자 등.
  - **퍼밀리어**: 다람쥐, 새알 등.
  - **식재료**: 감자, 버섯, 소라, 벌꿀 등 다양한 요리 재료.
  - **채광**: 추억/회상/기억/망각의 결정.
  - **이동/거점**: 워프포인트, 여신상, 상점, 공방 등.
  - **던전**: 일반, 재화, 특성 던전.
- **마커 관리**: 새로운 위치를 추가하거나 기존 마커를 편집할 수 있는 기능.
- **경로 그리기**: 효율적인 파밍 루트를 계획할 수 있는 경로 표시 기능.
- **반응형 디자인**: 다양한 디바이스에서 최적화된 화면 제공.

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Styled Components
- **State Management**: Zustand
- **Map Library**: Leaflet, React-Leaflet
- **Forms & Validation**: React Hook Form, Zod
- **Icons**: React Icons (Fa, Gi, Ri, Tb)
- **Utilities**: UUID

## 📦 프로젝트 구조

```text
src/
├── assets/          # 정적 자원 (이미지, 아이콘 등)
├── features/        # 도메인별 기능 모듈
│   └── map/         # 지도 관련 핵심 로직 (컴포넌트, 데이터, 스토어)
├── hooks/           # 공용 커스텀 훅
├── layouts/         # 페이지 레이아웃
├── pages/           # 페이지 컴포넌트
├── router.tsx       # 라우팅 설정
├── store/           # 전역 상태 관리 (Toast 등)
└── styles/          # 글로벌 스타일 및 테마
```

## ⚙️ 시작하기

### 설치

```bash
npm install
```

### 로컬 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## 📝 라이선스

이 프로젝트는 개인적인 용도로 개발되었습니다. 게임 자산에 대한 저작권은 해당 게임사에 있습니다.
