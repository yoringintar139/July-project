const ANSWER_COUNT = 20;
const RECOMMENDATION_COUNT = 5;

const JOB_CATALOG = [
  {
    name: "콘텐츠 기획자",
    summary: "비동기 문서화와 자율 실행이 중요한 역할",
    description: "콘텐츠 전략을 설계하고 제작 흐름을 관리하며, 사용자 반응 데이터를 바탕으로 개선 우선순위를 정하는 역할입니다.",
    environmentContext: ["조용한 집중 시간 확보가 중요", "기획/디자인/마케팅과 주기적 협업", "문서 기반 피드백이 많은 편"],
    weatherContext: ["실내 근무 비중이 높아 날씨 영향은 낮은 편", "비/눈 오는 날엔 출퇴근 변수만 고려", "계절별로 실내 건조/냉난방 대비 필요"],
    keyTasks: ["콘텐츠 캘린더 운영", "성과 지표 분석", "브랜드 톤 가이드 정리"],
    requiredSkills: ["문서화", "데이터 해석", "기획 커뮤니케이션"],
    prepChecklist: ["포트폴리오 3건 이상", "콘텐츠 KPI 사례 정리", "협업 툴 활용 경험 정리"],
    weights: { autonomy: 0.9, collaboration: 0.55, communication: 0.85, flexibility: 0.75 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "프로덕트 디자이너",
    summary: "협업과 사용자 중심 문제 해결이 핵심",
    description: "문제를 사용자 관점에서 정의하고, 와이어프레임부터 인터페이스 개선까지 제품 경험 전체를 설계합니다.",
    environmentContext: ["팀 워크숍/리뷰 미팅이 잦은 편", "사용자 리서치 결과를 자주 공유", "협업 툴 중심의 빠른 피드백 문화"],
    weatherContext: ["대부분 실내 협업이라 기상 영향은 제한적", "현장 인터뷰 일정이 있으면 우천 변수 고려", "환절기엔 컨디션 관리가 생산성에 영향"],
    keyTasks: ["사용자 흐름 설계", "UI 컴포넌트 설계", "사용성 테스트"],
    requiredSkills: ["문제 정의", "시각 설계", "협업 조율"],
    prepChecklist: ["케이스 스터디 2~3건", "Figma 프로젝트 정리", "사용성 테스트 리포트 샘플"],
    weights: { autonomy: 0.7, collaboration: 0.85, communication: 0.7, flexibility: 0.65 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "team",
    communicationStyle: "mixed",
    culture: "challenge"
  },
  {
    name: "백엔드 개발자",
    summary: "집중 개발과 비동기 협업이 균형을 이루는 직무",
    description: "서비스의 서버 로직과 데이터 흐름을 설계하고, 안정적인 API와 운영 관점의 품질을 책임지는 역할입니다.",
    environmentContext: ["깊은 집중 개발 시간이 필수", "이슈 트래커/PR 중심 협업", "장애 대응 시 단기 고강도 커뮤니케이션 발생"],
    weatherContext: ["원격/실내 근무 비중이 높아 날씨 직접 영향은 낮음", "폭우·폭설 시 네트워크/전원 안정성 체크 권장", "장마철에는 서버실/장비 운영 이슈 모니터링 필요"],
    keyTasks: ["API 설계/구현", "DB 모델링", "성능/장애 대응"],
    requiredSkills: ["서버 프로그래밍", "SQL/모델링", "문제 해결"],
    prepChecklist: ["REST API 프로젝트", "트러블슈팅 사례 문서화", "테스트 코드 작성 경험"],
    weights: { autonomy: 0.8, collaboration: 0.65, communication: 0.7, flexibility: 0.8 },
    workType: "remote",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "영업 기획",
    summary: "실시간 조율과 팀 커뮤니케이션 비중이 큼",
    description: "매출 목표 달성을 위해 시장과 고객 데이터를 분석하고, 실행 가능한 영업 전략과 운영 프로세스를 설계합니다.",
    environmentContext: ["영업팀/운영팀과 즉시 소통이 잦음", "성과 지표 리뷰 주기가 빠름", "시장 변화에 따라 우선순위 변동이 큼"],
    weatherContext: ["외부 미팅/이동이 잦으면 날씨 영향이 큰 편", "우천·폭염 시 방문 일정 조정 가능성 높음", "계절성 수요 변화가 성과 지표에 반영되기 쉬움"],
    keyTasks: ["시장/경쟁 분석", "영업 파이프라인 개선", "실적 리뷰 운영"],
    requiredSkills: ["데이터 기반 의사결정", "대인 커뮤니케이션", "실행 관리"],
    prepChecklist: ["성과 분석 리포트 샘플", "엑셀/시트 분석 능력", "협업 사례 정리"],
    weights: { autonomy: 0.5, collaboration: 0.9, communication: 0.8, flexibility: 0.45 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "품질 관리(QA)",
    summary: "안정적인 프로세스와 정밀한 커뮤니케이션이 중요",
    description: "서비스의 기능 품질을 검증하고 결함을 조기에 발견해, 릴리스 안정성과 사용자 신뢰를 높이는 역할입니다.",
    environmentContext: ["릴리스 전 점검 일정이 명확한 편", "개발/기획과 결함 재현 협업 빈도 높음", "체크리스트와 문서 정확성이 중요"],
    weatherContext: ["실내 테스트 중심으로 기상 영향은 낮음", "악천후 시 재택 테스트 환경 전환이 잦을 수 있음", "습도/온도 변화가 일부 디바이스 테스트에 변수"],
    keyTasks: ["테스트 케이스 설계", "결함 재현/보고", "릴리스 전 검증"],
    requiredSkills: ["세밀함", "문서 정리", "품질 기준 수립"],
    prepChecklist: ["테스트 시나리오 문서", "버그 리포트 샘플", "기본 자동화 도구 경험"],
    weights: { autonomy: 0.6, collaboration: 0.75, communication: 0.75, flexibility: 0.55 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "mixed",
    culture: "stable"
  },
  {
    name: "마케팅 전략",
    summary: "빠른 실험과 협업, 도전 문화 적합성이 중요",
    description: "브랜드/제품 성장을 위해 타깃 전략을 세우고, 캠페인 실험을 통해 유입과 전환을 개선하는 역할입니다.",
    environmentContext: ["캠페인 일정에 따라 업무 리듬이 빠름", "데이터 대시보드 확인과 공유가 일상적", "부서 간 조율과 아이디어 회의가 잦음"],
    weatherContext: ["오프라인 캠페인 비중이 높으면 날씨 민감도 증가", "기상 상황에 따라 이벤트 참여율 변동 가능", "계절/기후 트렌드를 메시지 전략에 반영하기 좋음"],
    keyTasks: ["캠페인 기획", "성과 지표 추적", "메시지/채널 최적화"],
    requiredSkills: ["가설 설정", "실험 설계", "성과 분석"],
    prepChecklist: ["캠페인 회고 자료", "광고/분석 툴 기본 이해", "포트폴리오 지표 중심 정리"],
    weights: { autonomy: 0.75, collaboration: 0.8, communication: 0.7, flexibility: 0.7 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "team",
    communicationStyle: "mixed",
    culture: "challenge"
  },
  {
    name: "데이터 분석가",
    summary: "데이터 기반 인사이트 도출과 정교한 커뮤니케이션이 중요한 직무",
    description: "비즈니스 데이터를 수집/정제/분석해 실행 가능한 인사이트를 도출하고, 이해관계자에게 의사결정 근거를 전달하는 역할입니다.",
    environmentContext: ["분석 집중 시간이 길게 필요한 편", "기획/운영 조직과 정기 리포트 협업", "근거 중심의 문서/시각화 소통이 중요"],
    weatherContext: ["실내 업무 중심으로 기상 영향은 낮은 편", "악천후 시 원격 협업 전환이 용이", "계절성 소비 데이터 해석 시 기후 변수 반영 필요"],
    keyTasks: ["데이터 전처리", "대시보드 구축", "분석 리포트 작성"],
    requiredSkills: ["SQL", "통계적 사고", "데이터 시각화"],
    prepChecklist: ["분석 프로젝트 2건 이상", "대시보드 포트폴리오", "비즈니스 인사이트 문서화 경험"],
    weights: { autonomy: 0.75, collaboration: 0.7, communication: 0.8, flexibility: 0.65 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "HR 매니저",
    summary: "사람 중심 조율과 실시간 커뮤니케이션 역량이 중요한 역할",
    description: "채용, 온보딩, 평가, 조직문화 개선을 통해 구성원의 성장과 조직 성과를 함께 높이는 역할입니다.",
    environmentContext: ["다양한 부서와 상시 커뮤니케이션", "민감한 이슈를 신중하게 조율", "현장 대응과 문서 행정이 병행"],
    weatherContext: ["실내 근무가 주지만 대면 일정이 잦은 편", "악천후 시 인터뷰/행사 일정 조정 가능성", "계절별 채용 시즌 영향이 큼"],
    keyTasks: ["채용 프로세스 운영", "조직문화 프로그램 기획", "평가/보상 운영 지원"],
    requiredSkills: ["대인 소통", "갈등 조정", "정책/문서 관리"],
    prepChecklist: ["채용 운영 경험 정리", "조직문화 프로젝트 사례", "노무/인사 제도 기본 이해"],
    weights: { autonomy: 0.55, collaboration: 0.9, communication: 0.9, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "프론트엔드 개발자",
    summary: "사용자 경험과 빠른 협업 피드백 루프가 핵심인 직무",
    description: "웹/앱 인터페이스를 구현하고 성능, 접근성, 사용성을 개선해 사용자 경험을 직접적으로 높이는 역할입니다.",
    environmentContext: ["디자인/기획과 반복 리뷰가 많음", "짧은 단위 배포/피드백 사이클", "브라우저 이슈 대응을 위한 협업 빈도 높음"],
    weatherContext: ["실내 개발 업무 중심", "재택 시에도 협업 툴로 대응 가능", "폭염/한파 시즌에는 장시간 착석 환경 관리가 중요"],
    keyTasks: ["UI 구현", "상태/성능 최적화", "접근성 개선"],
    requiredSkills: ["JavaScript/TypeScript", "UI 아키텍처", "협업 커뮤니케이션"],
    prepChecklist: ["반응형 웹 프로젝트", "성능 개선 사례", "컴포넌트 설계 문서"],
    weights: { autonomy: 0.7, collaboration: 0.85, communication: 0.75, flexibility: 0.75 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "team",
    communicationStyle: "mixed",
    culture: "growth"
  },
  {
    name: "프로젝트 매니저(PM)",
    summary: "일정 조율과 우선순위 관리, 다부서 협업이 핵심",
    description: "프로젝트 목표와 일정을 관리하고, 이해관계자 간 의사결정을 조율해 결과물을 안정적으로 완성하는 역할입니다.",
    environmentContext: ["회의/조율 업무 비중이 높음", "일정 변경 대응이 빈번", "문서 기반 진행 관리가 필수"],
    weatherContext: ["대부분 실내 업무지만 대면 미팅 이동이 발생", "악천후 시 일정 리스크 관리 필요", "분기/반기 단위 마일스톤 시즌 편차가 큼"],
    keyTasks: ["일정/리스크 관리", "이해관계자 커뮤니케이션", "요구사항 우선순위 조정"],
    requiredSkills: ["조율 능력", "문서화", "의사결정 지원"],
    prepChecklist: ["프로젝트 운영 사례", "이슈 관리 체계 경험", "회의록/의사결정 로그 정리"],
    weights: { autonomy: 0.65, collaboration: 0.95, communication: 0.9, flexibility: 0.55 },
    workType: "hybrid",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "재무 분석가",
    summary: "정확성과 안정성이 중요한 분석/리포팅 중심 역할",
    description: "재무 데이터를 분석하고 예산/손익 구조를 점검해 경영 의사결정에 필요한 인사이트를 제공하는 역할입니다.",
    environmentContext: ["정확한 수치 검증과 문서 작업 비중 높음", "월/분기 마감 시 업무 집중도 상승", "경영진/유관부서 보고 커뮤니케이션 필요"],
    weatherContext: ["실내 근무로 기상 영향은 낮음", "마감 시즌에는 출퇴근 변수 최소화가 중요", "계절성 매출 변동 반영 시 기후 데이터 참고 가능"],
    keyTasks: ["예산/실적 분석", "손익 리포트 작성", "비용 구조 개선 제안"],
    requiredSkills: ["회계/재무 이해", "정확성", "스프레드시트 모델링"],
    prepChecklist: ["재무 리포트 샘플", "엑셀 고급 함수 활용", "기초 회계/재무 지식 정리"],
    weights: { autonomy: 0.7, collaboration: 0.65, communication: 0.7, flexibility: 0.45 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "stable"
  },
  {
    name: "고객 성공 매니저(CSM)",
    summary: "고객 관계 관리와 실시간 문제 해결이 중요한 직무",
    description: "고객의 서비스 도입/활용을 지원하고 이슈를 선제적으로 관리해 장기적인 고객 만족과 재계약을 이끄는 역할입니다.",
    environmentContext: ["고객 접점 커뮤니케이션이 매우 잦음", "상황별 즉시 대응과 내부 협업 필요", "고객 피드백을 제품팀과 연결"],
    weatherContext: ["온라인 미팅 중심이면 기상 영향은 중간", "대면 방문 비중이 높으면 우천/폭설 변수 큼", "계절별 고객 사용 패턴 변화 모니터링 필요"],
    keyTasks: ["온보딩 지원", "고객 이슈 대응", "활용도/이탈 리스크 관리"],
    requiredSkills: ["고객 커뮤니케이션", "문제 해결", "협업 조율"],
    prepChecklist: ["고객 대응 사례 정리", "서비스 도메인 이해", "이슈 처리 프로세스 숙지"],
    weights: { autonomy: 0.6, collaboration: 0.9, communication: 0.95, flexibility: 0.6 },
    workType: "hybrid",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "growth"
  },
  {
    name: "운영 매니저",
    summary: "프로세스 안정화와 현장 이슈 조율이 중요한 역할",
    description: "운영 프로세스를 관리하고 이슈를 빠르게 해결해 서비스 품질과 효율을 유지/개선하는 역할입니다.",
    environmentContext: ["운영 지표 모니터링이 일상적", "예외 상황 대응을 위한 즉시 소통 빈도 높음", "표준 프로세스와 현장 대응의 균형 필요"],
    weatherContext: ["현장 운영 비중이 높을수록 기상 영향 증가", "악천후 대비 운영 플랜이 중요", "계절별 수요 편차 대응 필요"],
    keyTasks: ["운영 지표 관리", "프로세스 개선", "이슈/에스컬레이션 대응"],
    requiredSkills: ["운영 설계", "상황 판단", "협업 커뮤니케이션"],
    prepChecklist: ["운영 개선 사례", "SOP 문서 작성", "이슈 대응 회고 정리"],
    weights: { autonomy: 0.65, collaboration: 0.85, communication: 0.8, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "리서치 연구원",
    summary: "깊은 탐구와 장기 관점 문제 해결에 강점이 필요한 직무",
    description: "가설을 설정하고 정성/정량 데이터를 수집해 구조화된 연구 결과를 도출하고, 조직의 전략 의사결정에 기여합니다.",
    environmentContext: ["독립적인 탐구 시간이 충분히 필요", "리서치 설계/리뷰를 위한 협업 발생", "근거 중심의 정교한 보고가 요구됨"],
    weatherContext: ["실내 연구 중심이라 직접 영향은 낮음", "현장 조사 일정은 기상 변수 고려 필요", "장기 데이터 비교 시 계절 효과 반영 중요"],
    keyTasks: ["연구 설계", "데이터 수집/분석", "인사이트 보고서 작성"],
    requiredSkills: ["분석적 사고", "문헌 조사", "가설 검증"],
    prepChecklist: ["리서치 리포트 포트폴리오", "방법론 정리 문서", "발표/디펜스 경험"],
    weights: { autonomy: 0.9, collaboration: 0.6, communication: 0.75, flexibility: 0.7 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "individual",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "데이터 엔지니어",
    summary: "데이터 파이프라인 안정성과 협업 운영이 핵심인 직무",
    description: "데이터 수집/적재/가공 파이프라인을 구축하고 운영해 분석과 서비스에 필요한 데이터를 안정적으로 제공하는 역할입니다.",
    environmentContext: ["정기 배치 및 모니터링 중심 업무", "분석/백엔드 팀과 연계 협업", "장애 대응 시 신속한 커뮤니케이션 필요"],
    weatherContext: ["실내 업무 중심", "기상 영향은 낮지만 재택 인프라 점검 필요", "계절성 트래픽 변화 대비가 필요"],
    keyTasks: ["ETL 파이프라인 개발", "데이터 품질 관리", "워크플로우 모니터링"],
    requiredSkills: ["SQL/데이터 모델링", "파이프라인 설계", "문제 해결"],
    prepChecklist: ["파이프라인 프로젝트", "데이터 품질 개선 사례", "운영 이슈 대응 기록"],
    weights: { autonomy: 0.75, collaboration: 0.7, communication: 0.7, flexibility: 0.7 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "머신러닝 엔지니어",
    summary: "실험과 배포를 반복하는 연구개발형 역할",
    description: "모델 학습/평가/서빙까지 전 과정을 설계해 실제 제품 문제를 해결하는 머신러닝 시스템을 만드는 역할입니다.",
    environmentContext: ["실험 반복 주기가 빠름", "데이터/백엔드와 협업이 빈번", "성능 검증 중심의 문서화 필요"],
    weatherContext: ["실내 연구개발 중심이라 기상 영향 낮음", "원격 환경에서도 실험 관리 가능", "전력/네트워크 안정성 관리 중요"],
    keyTasks: ["모델 학습/튜닝", "서빙 파이프라인 구성", "성능 모니터링"],
    requiredSkills: ["통계/ML", "Python", "실험 설계"],
    prepChecklist: ["모델링 포트폴리오", "배포 경험 정리", "평가 지표 비교 문서"],
    weights: { autonomy: 0.85, collaboration: 0.7, communication: 0.7, flexibility: 0.75 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "DevOps 엔지니어",
    summary: "자동화와 안정적 운영을 동시에 요구하는 직무",
    description: "개발과 운영의 경계를 줄이고 배포/모니터링/인프라 자동화를 통해 서비스 신뢰성을 높이는 역할입니다.",
    environmentContext: ["배포 일정에 따라 긴장도 상승", "개발팀과 운영팀 사이 조율 빈번", "장애 대응 체계가 중요"],
    weatherContext: ["실내/원격 혼합 근무", "악천후 시 재택 전환이 용이", "전력/네트워크 리스크 대비 필요"],
    keyTasks: ["CI/CD 구축", "인프라 자동화", "운영 모니터링"],
    requiredSkills: ["클라우드 이해", "스크립팅", "운영 자동화"],
    prepChecklist: ["배포 자동화 사례", "장애 대응 회고", "모니터링 대시보드 구성"],
    weights: { autonomy: 0.75, collaboration: 0.8, communication: 0.75, flexibility: 0.8 },
    workType: "remote",
    workTime: "flexible",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "보안 분석가",
    summary: "위협 탐지와 신속 대응이 중요한 보안 중심 직무",
    description: "보안 로그와 이벤트를 분석해 위협을 탐지하고, 사고 대응 프로세스를 운영해 조직의 보안 수준을 높이는 역할입니다.",
    environmentContext: ["모니터링 기반의 상시 대응 환경", "긴급 이슈 시 즉시 협업 필요", "정책/절차 문서 정확성이 중요"],
    weatherContext: ["실내 관제 중심으로 기상 영향은 낮음", "재난 상황 대비 원격 대응 체계 필요", "계절성 공격 트렌드 모니터링 필요"],
    keyTasks: ["보안 이벤트 분석", "사고 대응", "취약점 개선 제안"],
    requiredSkills: ["로그 분석", "위협 모델링", "커뮤니케이션"],
    prepChecklist: ["보안 시나리오 대응 사례", "기본 인증/암호화 이해", "사고 보고서 샘플"],
    weights: { autonomy: 0.65, collaboration: 0.8, communication: 0.8, flexibility: 0.6 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "회계사",
    summary: "정확성과 규정 준수가 핵심인 재무 직무",
    description: "회계 기준에 맞춰 장부를 관리하고 결산/세무 업무를 수행해 기업의 재무 건전성과 투명성을 확보하는 역할입니다.",
    environmentContext: ["마감 일정 중심의 루틴 업무", "정확한 문서 처리와 검토 필수", "유관부서와 데이터 정합성 확인"],
    weatherContext: ["실내 업무 중심", "기상 영향 낮음", "마감일엔 출퇴근 변수 관리가 중요"],
    keyTasks: ["결산 수행", "세무 신고", "회계 자료 검토"],
    requiredSkills: ["회계 기준 이해", "정확성", "문서 처리 능력"],
    prepChecklist: ["회계 실무 사례", "세무 일정 관리 경험", "재무 문서 작성 능력"],
    weights: { autonomy: 0.65, collaboration: 0.6, communication: 0.65, flexibility: 0.4 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "stable"
  },
  {
    name: "법무 담당자",
    summary: "리스크 관리와 계약 검토 중심의 전문 직무",
    description: "계약과 규제 이슈를 검토해 법적 리스크를 줄이고, 사업 의사결정이 규정 내에서 이뤄지도록 지원하는 역할입니다.",
    environmentContext: ["계약 검토 요청이 수시로 발생", "사업팀과 긴밀한 협의 필요", "근거 문서와 기록 관리가 중요"],
    weatherContext: ["실내 문서 중심 업무", "외부 미팅 시 날씨 변수 존재", "분쟁/이슈 대응은 계절과 무관하게 발생"],
    keyTasks: ["계약서 검토", "법적 리스크 자문", "규정 준수 점검"],
    requiredSkills: ["법률 해석", "리스크 판단", "협상 커뮤니케이션"],
    prepChecklist: ["계약 검토 사례", "규정 정리 문서", "이슈 대응 로그"],
    weights: { autonomy: 0.7, collaboration: 0.75, communication: 0.8, flexibility: 0.45 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "간호사",
    summary: "현장 대응과 팀워크가 매우 중요한 의료 직무",
    description: "환자 상태를 관찰하고 처치/투약/교육을 수행하며 의료진과 협업해 환자 안전을 지키는 역할입니다.",
    environmentContext: ["현장 중심의 실시간 협업", "교대 근무와 즉시 대응 빈번", "정확한 기록과 인수인계가 필수"],
    weatherContext: ["실내 업무지만 출퇴근/응급 상황에 기상 변수 존재", "폭설/폭우 시 교대 인력 운영 이슈 발생", "계절성 질환 증가 시 업무량 변동"],
    keyTasks: ["환자 관찰/기록", "처치 및 투약", "의료진 협업"],
    requiredSkills: ["상황 판단", "공감 소통", "정확한 기록"],
    prepChecklist: ["임상 실습 경험", "응급 대응 프로토콜 숙지", "의료 기록 작성 능력"],
    weights: { autonomy: 0.55, collaboration: 0.95, communication: 0.95, flexibility: 0.55 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "교사",
    summary: "지속적 상호작용과 계획적 운영이 필요한 교육 직무",
    description: "학습 목표를 설계하고 수업/평가/피드백을 통해 학습자의 성장과 성취를 지원하는 역할입니다.",
    environmentContext: ["대면 소통 비중이 매우 높음", "수업 계획과 평가 운영 병행", "학부모/동료 교사와 협력 필요"],
    weatherContext: ["학교 현장 근무로 기상에 따른 출결 변수 존재", "계절 행사/학사 일정 영향", "폭염/한파 시 학습 환경 조정 필요"],
    keyTasks: ["수업 설계/운영", "평가/피드백", "학습 상담"],
    requiredSkills: ["설명력", "관계 형성", "수업 운영"],
    prepChecklist: ["수업안 포트폴리오", "평가 설계 사례", "생활지도 경험 정리"],
    weights: { autonomy: 0.6, collaboration: 0.85, communication: 0.95, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "공급망 기획자",
    summary: "수요 예측과 조율 역량이 중요한 운영/기획 직무",
    description: "수요 예측과 재고/조달/생산 계획을 통합 관리해 공급망 효율과 안정성을 높이는 역할입니다.",
    environmentContext: ["다부서 일정 조율이 빈번", "예외 상황 대응 능력 요구", "수치 기반 계획 보고가 중요"],
    weatherContext: ["운송/물류에 기상 영향이 직접 반영", "태풍/폭설 등 재난 대비 시나리오 필요", "계절성 수요 변동 관리 필수"],
    keyTasks: ["수요 예측", "재고/조달 계획", "공급 리스크 대응"],
    requiredSkills: ["데이터 해석", "조율 능력", "운영 최적화"],
    prepChecklist: ["수요 예측 사례", "재고 개선 프로젝트", "공급 이슈 대응 기록"],
    weights: { autonomy: 0.65, collaboration: 0.85, communication: 0.8, flexibility: 0.55 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "물류 관리자",
    summary: "현장 운영과 신속한 상황 판단이 핵심",
    description: "입출고, 배송, 창고 운영을 관리해 물류 흐름을 최적화하고 고객 납기 품질을 유지하는 역할입니다.",
    environmentContext: ["현장 의사결정 빈도가 높음", "운송사/창고/영업 간 조율 필요", "실시간 이슈 대응이 많음"],
    weatherContext: ["날씨에 따라 배송 지연 리스크 큼", "폭우/폭설 시 운영 계획 변경 빈번", "계절별 물량 급증 대응 필요"],
    keyTasks: ["입출고 관리", "배송 일정 조율", "물류 KPI 관리"],
    requiredSkills: ["운영 관리", "문제 해결", "커뮤니케이션"],
    prepChecklist: ["물류 개선 사례", "현장 운영 경험", "KPI 리포트 작성"],
    weights: { autonomy: 0.65, collaboration: 0.85, communication: 0.8, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "구매 담당자",
    summary: "협상과 비용/품질 균형 관리가 중요한 직무",
    description: "공급업체를 발굴/평가하고 단가 및 납기 조건을 협의해 안정적인 조달 체계를 운영하는 역할입니다.",
    environmentContext: ["협상과 커뮤니케이션 비중 높음", "가격/품질/납기 균형 판단 필요", "내부 요청 부서와 일정 조율"],
    weatherContext: ["운송 일정은 날씨 영향을 받기 쉬움", "해외 조달 시 기후/재난 변수 고려", "계절 이슈로 원자재 가격 변동 가능"],
    keyTasks: ["공급업체 관리", "단가/계약 협상", "조달 일정 관리"],
    requiredSkills: ["협상력", "비용 분석", "리스크 관리"],
    prepChecklist: ["협상 사례 정리", "원가 분석 경험", "공급업체 평가 문서"],
    weights: { autonomy: 0.65, collaboration: 0.8, communication: 0.85, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "생산 관리자",
    summary: "현장 공정 안정화와 품질/납기 관리가 핵심",
    description: "생산 계획을 실행하고 공정 효율, 품질, 안전을 관리해 목표 생산량과 납기를 달성하는 역할입니다.",
    environmentContext: ["현장 중심 운영", "교대/설비 이슈 대응 필요", "품질팀/물류팀과 협업"],
    weatherContext: ["기온/습도 변화가 공정에 영향 가능", "악천후 시 물류/출근 이슈 발생", "전력 수급 변수 대비 필요"],
    keyTasks: ["생산 계획 실행", "공정 개선", "품질/안전 관리"],
    requiredSkills: ["공정 이해", "현장 리더십", "문제 해결"],
    prepChecklist: ["생산성 개선 사례", "품질 이슈 대응 경험", "안전 관리 기록"],
    weights: { autonomy: 0.65, collaboration: 0.85, communication: 0.75, flexibility: 0.45 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "건축가",
    summary: "창의 설계와 다분야 조율이 함께 필요한 직무",
    description: "공간의 기능과 미학을 설계하고 구조/설비/시공 이해관계자를 조율해 프로젝트를 완성하는 역할입니다.",
    environmentContext: ["설계 집중과 협의 미팅이 병행", "클라이언트/시공사와 조율 빈번", "현장 검토와 문서 작업을 모두 수행"],
    weatherContext: ["현장 방문 일정은 기상 영향 큼", "우천/한파 시 시공 일정 변경 가능", "계절 조건에 따른 설계 고려 필요"],
    keyTasks: ["설계안 작성", "인허가/도면 관리", "현장 협의"],
    requiredSkills: ["공간 설계", "조율 능력", "도면 해석"],
    prepChecklist: ["설계 포트폴리오", "프로젝트 진행 문서", "현장 협업 경험"],
    weights: { autonomy: 0.75, collaboration: 0.85, communication: 0.8, flexibility: 0.6 },
    workType: "hybrid",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "mixed",
    culture: "challenge"
  },
  {
    name: "기계 엔지니어",
    summary: "설계 정확성과 현장 적용 역량이 중요한 공학 직무",
    description: "기계 시스템을 설계/검증하고 생산/운영 단계에서 성능과 안정성을 확보하는 역할입니다.",
    environmentContext: ["설계 검토와 테스트 업무 병행", "제조/품질/구매와 협업 필요", "문제 원인 분석 비중 높음"],
    weatherContext: ["실내 설계 중심이나 현장 테스트 시 기상 영향", "온도/습도 조건이 성능 평가 변수", "계절별 유지보수 수요 변동"],
    keyTasks: ["기구 설계", "성능 시험", "문제 원인 분석"],
    requiredSkills: ["기계 설계", "해석 능력", "실험/검증"],
    prepChecklist: ["설계 프로젝트", "시험 결과 보고서", "개선안 제안 문서"],
    weights: { autonomy: 0.75, collaboration: 0.7, communication: 0.65, flexibility: 0.55 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "mixed",
    culture: "stable"
  },
  {
    name: "전기 엔지니어",
    summary: "안전과 신뢰성을 중시하는 시스템 설계/운영 직무",
    description: "전기 설비와 시스템을 설계/점검하고 장애 예방과 안정 운용을 위한 기술 개선을 수행하는 역할입니다.",
    environmentContext: ["안전 규정 준수가 최우선", "설비 점검과 문서 작업 병행", "긴급 장애 시 협업 대응 필수"],
    weatherContext: ["폭우/낙뢰 등 기상 변수에 민감", "기온 변화에 따른 설비 부하 관리 필요", "재난 대비 점검 체계 중요"],
    keyTasks: ["설비 설계/점검", "장애 예방", "운영 안정화"],
    requiredSkills: ["전기 시스템 이해", "안전 의식", "문제 해결"],
    prepChecklist: ["설비 점검 기록", "안전 교육 이수", "장애 대응 사례"],
    weights: { autonomy: 0.7, collaboration: 0.75, communication: 0.7, flexibility: 0.45 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "영상 편집자",
    summary: "크리에이티브 집중과 피드백 반영이 핵심인 직무",
    description: "촬영 소스를 편집하고 스토리 흐름과 톤을 맞춰 전달력 높은 영상 콘텐츠를 완성하는 역할입니다.",
    environmentContext: ["집중 편집 시간이 길게 필요", "기획/촬영팀과 수정 피드백 반복", "납기 중심의 일정 관리 필요"],
    weatherContext: ["실내 편집 업무 중심", "외부 촬영 일정은 날씨 영향 큼", "계절/행사 시즌별 물량 편차 발생"],
    keyTasks: ["컷 편집", "색보정/사운드 정리", "최종본 납품"],
    requiredSkills: ["스토리텔링", "편집 툴 활용", "피드백 반영"],
    prepChecklist: ["편집 포트폴리오", "전후 비교 사례", "납기 준수 기록"],
    weights: { autonomy: 0.8, collaboration: 0.65, communication: 0.7, flexibility: 0.7 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "growth"
  },
  {
    name: "카피라이터",
    summary: "메시지 설계와 빠른 실험/수정이 중요한 직무",
    description: "브랜드와 제품 메시지를 문장으로 설계하고 캠페인 목표에 맞는 카피를 제작/개선하는 역할입니다.",
    environmentContext: ["집중 작성 시간과 피드백 회의 병행", "마케팅/디자인과 협업 빈번", "A/B 테스트 기반 수정 반복"],
    weatherContext: ["실내 작업 중심으로 기상 영향 낮음", "오프라인 촬영/행사 연계 시 날씨 변수 존재", "계절성 문구 기획 수요 증가"],
    keyTasks: ["캠페인 카피 작성", "브랜드 톤 관리", "성과 기반 문구 개선"],
    requiredSkills: ["문장력", "브랜드 이해", "실험적 사고"],
    prepChecklist: ["카피 포트폴리오", "성과 데이터 연결 사례", "톤앤매너 가이드 작성"],
    weights: { autonomy: 0.8, collaboration: 0.75, communication: 0.85, flexibility: 0.7 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "async",
    culture: "challenge"
  },
  {
    name: "통번역가",
    summary: "정확한 언어 전달과 맥락 이해가 핵심인 직무",
    description: "문서/회의/콘텐츠의 언어를 정확히 변환해 정보 손실 없이 전달하고, 문화적 맥락 차이를 조율하는 역할입니다.",
    environmentContext: ["집중 번역 업무 비중 높음", "분야별 용어 정합성 관리 필요", "클라이언트 피드백 반영 작업 반복"],
    weatherContext: ["실내 원격 업무 중심", "기상 영향은 낮은 편", "국제 일정 대응 시 시차/스케줄 영향이 큼"],
    keyTasks: ["문서 번역", "회의 통역", "용어집 관리"],
    requiredSkills: ["언어 정확성", "맥락 이해", "커뮤니케이션"],
    prepChecklist: ["번역 샘플 포트폴리오", "전문 용어집 구축", "분야별 레퍼런스 정리"],
    weights: { autonomy: 0.85, collaboration: 0.6, communication: 0.9, flexibility: 0.75 },
    workType: "remote",
    workTime: "flexible",
    collaborationStyle: "individual",
    communicationStyle: "async",
    culture: "stable"
  },
  {
    name: "게임 기획자",
    summary: "시스템 설계와 협업 커뮤니케이션이 중요한 콘텐츠 직무",
    description: "게임의 핵심 재미와 성장 구조를 설계하고, 개발/아트 팀과 협업해 기획 의도를 실제 플레이 경험으로 구현하는 역할입니다.",
    environmentContext: ["문서 기반 기획과 회의가 병행", "개발/아트와 반복 피드백", "라이브 지표를 바탕으로 개선"],
    weatherContext: ["실내 협업 중심으로 기상 영향 낮음", "오프라인 테스트 행사 시 날씨 변수 존재", "시즌 이벤트 운영 시 일정 변동 가능"],
    keyTasks: ["시스템/밸런스 기획", "콘텐츠 로드맵 설계", "지표 기반 개선"],
    requiredSkills: ["게임 시스템 이해", "문서화", "협업 조율"],
    prepChecklist: ["기획서 포트폴리오", "라이브 게임 분석", "지표 해석 사례"],
    weights: { autonomy: 0.75, collaboration: 0.85, communication: 0.8, flexibility: 0.7 },
    workType: "hybrid",
    workTime: "flexible",
    collaborationStyle: "team",
    communicationStyle: "mixed",
    culture: "challenge"
  },
  {
    name: "사회복지사",
    summary: "대면 상담과 현장 연계가 중요한 사람 중심 직무",
    description: "대상자의 상황을 평가하고 필요한 복지 자원을 연계해 삶의 안정과 자립을 지원하는 역할입니다.",
    environmentContext: ["대면 상담과 기관 협력이 잦음", "긴급 상황 대응 필요", "기록과 사례 관리가 중요"],
    weatherContext: ["현장 방문 일정은 날씨 영향 큼", "폭우/폭설 시 방문 조정 필요", "계절별 취약계층 지원 수요 변화"],
    keyTasks: ["사례 상담", "복지 자원 연계", "사례 기록/보고"],
    requiredSkills: ["공감 소통", "상황 판단", "협업 조정"],
    prepChecklist: ["사례관리 경험", "복지 제도 이해", "상담 기록 작성"],
    weights: { autonomy: 0.6, collaboration: 0.9, communication: 0.95, flexibility: 0.55 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "셰프",
    summary: "현장 실행력과 팀워크가 핵심인 고강도 서비스 직무",
    description: "메뉴를 기획하고 조리 프로세스를 운영해 일정한 품질의 음식과 서비스 경험을 제공하는 역할입니다.",
    environmentContext: ["현장 중심의 빠른 협업", "피크 타임 집중 대응", "위생/품질 기준 준수 필수"],
    weatherContext: ["외식 수요는 계절/기후 영향 큼", "폭우/폭염 시 고객 유입 변동", "식자재 수급에도 기상 변수 반영"],
    keyTasks: ["메뉴/레시피 운영", "조리/플레이팅", "주방 오퍼레이션 관리"],
    requiredSkills: ["조리 기술", "현장 리더십", "품질 관리"],
    prepChecklist: ["조리 포트폴리오", "위생 교육 이수", "피크타임 운영 경험"],
    weights: { autonomy: 0.6, collaboration: 0.9, communication: 0.8, flexibility: 0.45 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "수의사",
    summary: "정확한 진단과 보호자 커뮤니케이션이 필요한 의료 직무",
    description: "동물의 건강 상태를 진단/치료하고 보호자에게 치료 계획을 설명하며 장기 건강 관리를 지원하는 역할입니다.",
    environmentContext: ["현장 진료 중심 업무", "긴급 케이스 대응 발생", "보호자 상담과 기록 관리 병행"],
    weatherContext: ["내원 패턴은 날씨 영향을 받음", "계절성 질환 대응 필요", "폭염/한파 시 응급 내원 증가 가능"],
    keyTasks: ["진단/치료", "보호자 상담", "진료 기록 관리"],
    requiredSkills: ["의학 지식", "상황 판단", "설명 커뮤니케이션"],
    prepChecklist: ["임상 실습 경험", "진료 케이스 정리", "보호자 커뮤니케이션 사례"],
    weights: { autonomy: 0.7, collaboration: 0.75, communication: 0.9, flexibility: 0.55 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "도시계획가",
    summary: "장기 전략과 공공 이해관계 조율이 중요한 계획 직무",
    description: "도시의 공간/교통/환경 데이터를 분석해 장기 도시 발전 계획을 수립하고 이해관계자와 합의를 이끄는 역할입니다.",
    environmentContext: ["분석/문서 업무와 회의 병행", "행정/시민/전문가 조율 필요", "프로젝트 기간이 긴 편"],
    weatherContext: ["현장 조사 일정은 기상 영향", "기후 리스크를 계획에 반영", "계절별 교통/환경 데이터 비교 필요"],
    keyTasks: ["도시 데이터 분석", "계획안 수립", "공청회/협의 운영"],
    requiredSkills: ["정책 분석", "시스템 사고", "이해관계 조율"],
    prepChecklist: ["계획 보고서 포트폴리오", "GIS/데이터 분석 경험", "협의체 운영 사례"],
    weights: { autonomy: 0.75, collaboration: 0.85, communication: 0.8, flexibility: 0.6 },
    workType: "hybrid",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "mixed",
    culture: "growth"
  },
  {
    name: "소방관",
    summary: "긴급 대응과 팀 기반 실행이 핵심인 현장 안전 직무",
    description: "화재/재난 현장에서 인명 구조와 화재 진압을 수행하고 예방 점검 활동으로 지역 안전을 지키는 역할입니다.",
    environmentContext: ["현장 중심의 즉시 대응", "강한 팀워크와 역할 분담", "훈련과 체력 관리가 중요"],
    weatherContext: ["폭우/폭설/폭염 등 기상 악화 시 출동 증가", "재난 기후 이벤트 대응 빈도 증가", "계절성 화재 위험 요인 점검 필요"],
    keyTasks: ["긴급 출동 대응", "구조/진압", "예방 점검/훈련"],
    requiredSkills: ["위기 대응", "팀 협업", "체력/안전 의식"],
    prepChecklist: ["체력 기준 준비", "응급 구조 기본기", "재난 대응 프로토콜 숙지"],
    weights: { autonomy: 0.55, collaboration: 0.95, communication: 0.8, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "공무원(행정)",
    summary: "공공 서비스 운영과 정책 집행을 담당하는 안정형 직무",
    description: "민원 행정과 정책 집행 업무를 수행하며 규정에 따라 정확하고 일관된 공공 서비스를 제공하는 역할입니다.",
    environmentContext: ["정책/규정 기반 업무", "민원 응대와 문서 처리 병행", "부서 간 절차 협업 필요"],
    weatherContext: ["실내 업무 중심이나 방문 민원은 날씨 영향", "재난/기상 특보 시 행정 대응 업무 증가", "계절성 민원 패턴 변화 존재"],
    keyTasks: ["민원 처리", "행정 문서 작성", "정책 집행 지원"],
    requiredSkills: ["정확성", "대민 커뮤니케이션", "절차 이해"],
    prepChecklist: ["행정 문서 작성 연습", "관련 법령/절차 학습", "민원 응대 시나리오 준비"],
    weights: { autonomy: 0.55, collaboration: 0.7, communication: 0.8, flexibility: 0.4 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "회사원(사무직)",
    summary: "문서 기반 의사결정과 분석 중심 업무가 많은 두뇌형 직무",
    description: "사내 기획/운영/관리 업무를 수행하며 보고서 작성, 데이터 검토, 일정 조율 등 지식 노동 중심의 업무를 담당하는 역할입니다.",
    environmentContext: ["실내 좌식 업무 비중이 높음", "문서/리포트 작성 빈도 높음", "부서 간 협업과 회의가 정기적으로 발생"],
    weatherContext: ["실내 근무 중심으로 기상 영향 낮음", "우천/폭설 시 출퇴근 변수만 고려", "분기/연말 마감 시즌에 업무량 증가"],
    keyTasks: ["문서/리포트 작성", "데이터 검토", "부서 협업/조율"],
    requiredSkills: ["문서화", "논리적 사고", "업무 조율"],
    prepChecklist: ["사무 자동화 툴 숙련", "보고서 샘플 준비", "협업 사례 정리"],
    weights: { autonomy: 0.7, collaboration: 0.75, communication: 0.75, flexibility: 0.6 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "mixed",
    culture: "stable"
  },
  {
    name: "의사",
    summary: "진단 정확성과 전문 판단, 커뮤니케이션이 핵심인 전문 직무",
    description: "환자의 증상을 진단하고 치료 계획을 수립하며 의료진 협업을 통해 환자 안전과 치료 성과를 책임지는 역할입니다.",
    environmentContext: ["정확한 판단과 빠른 대응 필요", "의료진과 긴밀한 협업", "기록과 설명 책임이 큼"],
    weatherContext: ["실내 진료 중심이나 응급 상황은 기상 영향 가능", "계절성 질환으로 업무량 변동", "악천후 시 응급환자 대응 중요"],
    keyTasks: ["진단/치료 계획", "환자 상담", "의료진 협업"],
    requiredSkills: ["의학 지식", "판단력", "설명 커뮤니케이션"],
    prepChecklist: ["임상 경험 정리", "케이스 리포트 준비", "최신 가이드라인 업데이트"],
    weights: { autonomy: 0.75, collaboration: 0.8, communication: 0.9, flexibility: 0.5 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "stable"
  },
  {
    name: "판사",
    summary: "고도의 법리 판단과 집중 분석이 필요한 대표적 두뇌형 직무",
    description: "법률과 증거를 면밀히 검토해 공정한 판단을 내리고 판결문 작성과 재판 진행을 통해 사법 절차를 책임지는 역할입니다.",
    environmentContext: ["장시간 문헌/기록 검토", "집중력 높은 사고 업무", "법정 소통과 문서 작성 병행"],
    weatherContext: ["실내 근무 중심으로 기상 영향 낮음", "재판 일정은 계절 영향이 상대적으로 적음", "출퇴근 변수만 제한적으로 존재"],
    keyTasks: ["법리/증거 검토", "재판 진행", "판결문 작성"],
    requiredSkills: ["법률 해석", "논리적 판단", "문서 작성"],
    prepChecklist: ["판례 연구 정리", "논증 구조화 훈련", "판결문 작성 연습"],
    weights: { autonomy: 0.85, collaboration: 0.55, communication: 0.75, flexibility: 0.4 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "individual",
    communicationStyle: "mixed",
    culture: "stable"
  },
  {
    name: "피트니스 트레이너",
    summary: "운동 지도와 현장 코칭이 핵심인 활동형 직무",
    description: "회원의 신체 상태와 목표를 분석해 운동 프로그램을 설계하고, 동작 시범과 피드백을 통해 안전하고 효과적인 운동을 돕는 역할입니다.",
    environmentContext: ["현장 대면 코칭 중심", "실시간 피드백과 동작 교정 빈번", "회원 동기부여 커뮤니케이션 중요"],
    weatherContext: ["실내 센터 중심이나 계절별 회원 수 변동 존재", "폭염/한파 시 실내 운동 수요 증가", "우천 시 방문 패턴 변동 가능"],
    keyTasks: ["운동 프로그램 설계", "자세 교정/코칭", "회원 컨디션 관리"],
    requiredSkills: ["운동 생리 이해", "코칭 커뮤니케이션", "체력"],
    prepChecklist: ["트레이닝 자격/교육", "코칭 사례 정리", "운동 루틴 포트폴리오"],
    weights: { autonomy: 0.65, collaboration: 0.85, communication: 0.9, flexibility: 0.7 },
    workType: "onsite",
    workTime: "flexible",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "growth"
  },
  {
    name: "스포츠 코치",
    summary: "훈련 계획과 현장 리더십이 중요한 운동 전문 직무",
    description: "팀/선수의 경기력 향상을 위해 훈련 계획을 수립하고 기술/전술을 지도하며 경기 당일 운영까지 총괄하는 역할입니다.",
    environmentContext: ["훈련장/경기장 중심 업무", "실시간 판단과 팀 조율 필수", "훈련 데이터 분석 병행"],
    weatherContext: ["실외 훈련/경기는 기상 영향 큼", "폭염/우천 시 훈련 계획 조정", "시즌별 대회 일정에 따른 이동 증가"],
    keyTasks: ["훈련 계획 수립", "기술/전술 코칭", "경기 운영"],
    requiredSkills: ["운동 지도력", "상황 판단", "팀 리더십"],
    prepChecklist: ["지도 경력 정리", "훈련 프로그램 샘플", "경기 분석 자료"],
    weights: { autonomy: 0.7, collaboration: 0.9, communication: 0.85, flexibility: 0.65 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  },
  {
    name: "운동 처방사",
    summary: "건강 데이터 분석과 운동 실무를 결합한 활동형 전문 직무",
    description: "개인의 체력/건강 상태를 평가해 맞춤 운동 처방을 설계하고 안전하게 수행되도록 지도하는 역할입니다.",
    environmentContext: ["평가와 지도 업무 병행", "의료/재활 전문가와 협업", "지속적 모니터링과 피드백 필요"],
    weatherContext: ["실내 운동 시설 중심으로 기상 영향 낮음", "계절별 컨디션 변화 반영 필요", "기온/습도에 따른 운동 강도 조절"],
    keyTasks: ["체력/건강 평가", "운동 처방 설계", "운동 수행 모니터링"],
    requiredSkills: ["운동생리학", "데이터 해석", "지도 커뮤니케이션"],
    prepChecklist: ["평가 리포트 샘플", "처방 프로그램 사례", "관련 자격/교육 이수"],
    weights: { autonomy: 0.7, collaboration: 0.8, communication: 0.85, flexibility: 0.65 },
    workType: "onsite",
    workTime: "flexible",
    collaborationStyle: "mixed",
    communicationStyle: "realtime",
    culture: "growth"
  }
];

function createCognitiveJob(name) {
  return {
    name,
    summary: "분석/판단 중심의 사고형 직무",
    description: `${name} 직무는 데이터와 문서를 기반으로 문제를 분석하고 합리적인 의사결정을 내리는 역할입니다.`,
    environmentContext: ["실내 집중 업무 비중이 높음", "문서/리포트 기반 협업", "정확성과 논리성이 중요"],
    weatherContext: ["실내 업무 중심으로 기상 영향이 낮은 편", "악천후 시 원격 협업 전환이 용이", "출퇴근 변수만 제한적으로 고려"],
    keyTasks: ["정보 분석", "전략/계획 수립", "의사결정 지원 문서 작성"],
    requiredSkills: ["논리적 사고", "문서화", "데이터 해석"],
    prepChecklist: ["관련 프로젝트 정리", "문서/리포트 샘플 준비", "도메인 지식 업데이트"],
    weights: { autonomy: 0.78, collaboration: 0.7, communication: 0.76, flexibility: 0.62 },
    workType: "hybrid",
    workTime: "fixed",
    collaborationStyle: "mixed",
    communicationStyle: "mixed",
    culture: "growth"
  };
}

function createPhysicalJob(name) {
  return {
    name,
    summary: "현장 실행력과 신체활동이 핵심인 직무",
    description: `${name} 직무는 이동, 실습, 현장 대응 등 신체활동을 바탕으로 성과를 내는 역할입니다.`,
    environmentContext: ["현장 중심 업무", "실시간 협업/대응 빈도 높음", "체력과 상황 판단이 중요"],
    weatherContext: ["이동/현장 일정은 날씨 영향이 큼", "우천/폭염/한파 시 일정 조정 가능", "계절에 따른 활동 패턴 변화 존재"],
    keyTasks: ["현장 운영", "실시간 코칭/대응", "안전/품질 관리"],
    requiredSkills: ["체력", "즉시 대응", "현장 커뮤니케이션"],
    prepChecklist: ["현장 경험 정리", "안전 프로토콜 숙지", "체력/컨디션 관리 루틴"],
    weights: { autonomy: 0.66, collaboration: 0.86, communication: 0.82, flexibility: 0.66 },
    workType: "onsite",
    workTime: "fixed",
    collaborationStyle: "team",
    communicationStyle: "realtime",
    culture: "challenge"
  };
}

const EXTRA_COGNITIVE_JOB_NAMES = [
  "데이터 사이언티스트",
  "AI 연구원",
  "클라우드 아키텍트",
  "솔루션 아키텍트",
  "시스템 아키텍트",
  "네트워크 엔지니어",
  "데이터베이스 관리자(DBA)",
  "정보보호 관리자",
  "리스크 분석가",
  "투자 분석가",
  "증권 애널리스트",
  "보험계리사",
  "특허 변리사",
  "노무사",
  "세무사",
  "경영 컨설턴트",
  "전략 기획자",
  "서비스 기획자",
  "사업개발 매니저",
  "브랜드 매니저",
  "광고 기획자(AE)",
  "미디어 플래너",
  "UX 리서처",
  "UI 디자이너",
  "테크니컬 라이터",
  "기술 문서 작성가",
  "번역 프로젝트 매니저",
  "교육 콘텐츠 기획자",
  "교수",
  "강사",
  "심리상담사",
  "임상심리사",
  "약사",
  "정책 연구원",
  "행정사",
  "감정평가사",
  "부동산 자산관리사",
  "통계학자",
  "게임 서버 개발자",
  "모바일 앱 개발자",
  "로봇 소프트웨어 엔지니어",
  "임베디드 개발자",
  "해양생물학자",
  "해양 기상 분석가",
  "항공우주 연구원",
  "위성 관제사",
  "천문학자",
  "우주 시스템 엔지니어",
  "우주 임무 기획자",
  "로켓 추진 엔지니어",
  "궤도 역학 분석가",
  "우주선 항법 엔지니어",
  "우주 데이터 분석가",
  "우주 통신 엔지니어",
  "우주 방사선 연구원",
  "행성 지질 연구원",
  "우주 환경 시뮬레이션 연구원",
  "우주 정책 분석가",
  "산림 연구원",
  "지질학자",
  "생태 조사원",
  "스마트팜 운영 매니저",
  "농업 기술 컨설턴트",
  "지역개발 기획자"
];

const EXTRA_PHYSICAL_JOB_NAMES = [
  "재활 트레이너",
  "요가 강사",
  "필라테스 강사",
  "퍼스널 트레이너",
  "수영 코치",
  "축구 코치",
  "농구 코치",
  "배드민턴 코치",
  "생활체육지도사",
  "응급구조사",
  "구급대원",
  "경찰관",
  "산업안전관리자",
  "현장 감독",
  "건설 현장 관리자",
  "물리치료사",
  "작업치료사",
  "소방 안전 관리자",
  "해녀",
  "선원",
  "해양 구조대원",
  "우주비행사",
  "우주정거장 운영요원",
  "우주 유영 훈련 코치",
  "우주선 정비 기술자",
  "우주 발사 운영요원",
  "행성 탐사 로버 운영요원",
  "우주 생존 훈련 교관",
  "국립공원 레인저",
  "산악 구조대원",
  "산림관리원",
  "농장 관리자",
  "축산 관리자",
  "어촌 체험 가이드"
];

const EXTRA_COGNITIVE_JOBS = EXTRA_COGNITIVE_JOB_NAMES.map(createCognitiveJob);
const EXTRA_PHYSICAL_JOBS = EXTRA_PHYSICAL_JOB_NAMES.map(createPhysicalJob);
const ALL_JOB_CATALOG = JOB_CATALOG.concat(EXTRA_COGNITIVE_JOBS, EXTRA_PHYSICAL_JOBS);

const PHYSICAL_JOB_NAMES = new Set([
  "간호사",
  "물류 관리자",
  "생산 관리자",
  "셰프",
  "소방관",
  "피트니스 트레이너",
  "스포츠 코치",
  "운동 처방사",
  ...EXTRA_PHYSICAL_JOB_NAMES
]);

const COGNITIVE_JOB_NAMES = new Set([
  "콘텐츠 기획자",
  "프로덕트 디자이너",
  "백엔드 개발자",
  "품질 관리(QA)",
  "마케팅 전략",
  "데이터 분석가",
  "프론트엔드 개발자",
  "재무 분석가",
  "리서치 연구원",
  "데이터 엔지니어",
  "머신러닝 엔지니어",
  "DevOps 엔지니어",
  "보안 분석가",
  "회계사",
  "법무 담당자",
  "기계 엔지니어",
  "전기 엔지니어",
  "영상 편집자",
  "카피라이터",
  "통번역가",
  "게임 기획자",
  "도시계획가",
  "공무원(행정)",
  "회사원(사무직)",
  "의사",
  "판사",
  ...EXTRA_COGNITIVE_JOB_NAMES
]);

function isPhysicalJob(jobName) {
  return PHYSICAL_JOB_NAMES.has(jobName);
}

function isCognitiveJob(jobName) {
  return COGNITIVE_JOB_NAMES.has(jobName);
}

const JOB_THEME_NAMES = {
  coast: new Set([
    "해녀",
    "선원",
    "해양 구조대원",
    "해양생물학자",
    "해양 기상 분석가",
    "어촌 체험 가이드"
  ]),
  space: new Set([
    "우주비행사",
    "우주정거장 운영요원",
    "항공우주 연구원",
    "위성 관제사",
    "천문학자",
    "우주 시스템 엔지니어",
    "우주 임무 기획자",
    "로켓 추진 엔지니어",
    "궤도 역학 분석가",
    "우주선 항법 엔지니어",
    "우주 데이터 분석가",
    "우주 통신 엔지니어",
    "우주 방사선 연구원",
    "행성 지질 연구원",
    "우주 환경 시뮬레이션 연구원",
    "우주 정책 분석가",
    "우주 유영 훈련 코치",
    "우주선 정비 기술자",
    "우주 발사 운영요원",
    "행성 탐사 로버 운영요원",
    "우주 생존 훈련 교관"
  ]),
  mountain: new Set([
    "국립공원 레인저",
    "산악 구조대원",
    "산림관리원",
    "산림 연구원",
    "지질학자",
    "생태 조사원"
  ]),
  rural: new Set([
    "농장 관리자",
    "축산 관리자",
    "스마트팜 운영 매니저",
    "농업 기술 컨설턴트",
    "지역개발 기획자",
    "어촌 체험 가이드"
  ])
};

function getEnvironmentThemeByJobName(jobName) {
  for (const [theme, names] of Object.entries(JOB_THEME_NAMES)) {
    if (names.has(jobName)) return theme;
  }
  return "city";
}

function filterRankedByEnvironmentTheme(ranked, preferences) {
  const selectedTheme = preferences.environmentTheme;

  if (!selectedTheme || selectedTheme === "city") {
    return ranked;
  }

  const themed = ranked.filter((job) => getEnvironmentThemeByJobName(job.name) === selectedTheme);
  return themed.length > 0 ? themed : ranked;
}

function normalizeScore(avgLikert) {
  return Math.round(((avgLikert - 1) / 4) * 100);
}

function calculateCoreScores(answers) {
  const buckets = {
    autonomy: [answers[0], answers[1], answers[2], answers[3], answers[4]],
    collaboration: [answers[5], answers[6], answers[7], answers[8], answers[9]],
    communication: [answers[10], answers[11], answers[12], answers[13], answers[14]],
    flexibility: [answers[15], answers[16], answers[17], answers[18], answers[19]]
  };

  return Object.fromEntries(
    Object.entries(buckets).map(([key, values]) => {
      const avg = values.reduce((acc, cur) => acc + cur, 0) / values.length;
      return [key, normalizeScore(avg)];
    })
  );
}

function profileSummary(scores) {
  const traits = [];

  if (scores.autonomy >= 65) traits.push("독립 실행형");
  else traits.push("가이드 선호형");

  if (scores.collaboration >= 65) traits.push("협업 중심");
  else traits.push("개인 집중형");

  if (scores.communication >= 65) traits.push("비동기 소통 친화");
  else traits.push("실시간 소통 친화");

  if (scores.flexibility >= 65) traits.push("유연 근무 적합");
  else traits.push("고정 루틴 적합");

  return traits.join(" + ");
}

function getActivityLevelByJobName(jobName) {
  if (isPhysicalJob(jobName)) return "active";
  if (isCognitiveJob(jobName)) return "desk";
  return "balanced";
}

function getJobClusterByName(jobName) {
  const clusters = {
    tech: new Set([
      "백엔드 개발자",
      "프론트엔드 개발자",
      "데이터 엔지니어",
      "머신러닝 엔지니어",
      "DevOps 엔지니어",
      "보안 분석가"
    ]),
    analytics: new Set(["데이터 분석가", "재무 분석가", "회계사", "리서치 연구원", "회사원(사무직)"]),
    business: new Set(["프로젝트 매니저(PM)", "영업 기획", "운영 매니저", "고객 성공 매니저(CSM)", "HR 매니저"]),
    supply: new Set(["공급망 기획자", "물류 관리자", "구매 담당자", "생산 관리자"]),
    creative: new Set(["콘텐츠 기획자", "프로덕트 디자이너", "마케팅 전략", "영상 편집자", "카피라이터", "건축가", "게임 기획자"]),
    language: new Set(["통번역가"]),
    legal: new Set(["법무 담당자", "판사"]),
    educationMedical: new Set(["간호사", "교사", "수의사", "의사"]),
    engineering: new Set(["기계 엔지니어", "전기 엔지니어"]),
    publicService: new Set(["공무원(행정)", "소방관", "사회복지사"]),
    planning: new Set(["도시계획가"]),
    foodService: new Set(["셰프"]),
    sports: new Set(["피트니스 트레이너", "스포츠 코치", "운동 처방사"])
  };

  for (const [cluster, names] of Object.entries(clusters)) {
    if (names.has(jobName)) return cluster;
  }

  return "other";
}

function pickRecommendationsWithDiversity(ranked, preferences) {
  const topCandidates = ranked.slice(0, 20);
  const exploratoryPool = ranked.slice(20, 35);

  const selected = [];
  const usedClusters = new Set();

  for (const candidate of topCandidates) {
    const cluster = getJobClusterByName(candidate.name);
    if (usedClusters.has(cluster)) continue;

    selected.push(candidate);
    usedClusters.add(cluster);

    if (selected.length === RECOMMENDATION_COUNT - 1) break;
  }

  if (selected.length < RECOMMENDATION_COUNT - 1) {
    for (const candidate of topCandidates) {
      if (selected.some((item) => item.name === candidate.name)) continue;
      selected.push(candidate);
      if (selected.length === RECOMMENDATION_COUNT - 1) break;
    }
  }

  // Add one exploratory recommendation from lower-ranked but still relevant candidates.
  const availableExploratory = exploratoryPool.filter((candidate) =>
    !selected.some((item) => item.name === candidate.name)
  );

  if (availableExploratory.length > 0) {
    const pickIndex = Math.floor(Math.random() * Math.min(availableExploratory.length, 8));
    selected.push(availableExploratory[pickIndex]);
  }

  if (selected.length < RECOMMENDATION_COUNT) {
    for (const candidate of ranked) {
      if (selected.some((item) => item.name === candidate.name)) continue;
      selected.push(candidate);
      if (selected.length === RECOMMENDATION_COUNT) break;
    }
  }

  return selected;
}

function filterRankedByActivityTrack(ranked, preferences) {
  const activityLevel = preferences.activityLevel;

  if (activityLevel === "active") {
    // Active track: physical jobs only.
    return ranked.filter((job) => isPhysicalJob(job.name));
  }

  if (activityLevel === "desk") {
    // Desk track: cognitive jobs only.
    return ranked.filter((job) => isCognitiveJob(job.name));
  }

  return ranked;
}

function preferenceBonus(job, preferences) {
  let bonus = 0;
  const cognitiveDeskJobs = new Set(["판사", "회사원(사무직)", "의사"]);

  if (preferences.workType && preferences.workType === job.workType) bonus += 6;
  if (preferences.collaborationStyle && preferences.collaborationStyle === job.collaborationStyle) bonus += 5;

  if (
    preferences.communicationStyle &&
    (preferences.communicationStyle === job.communicationStyle || job.communicationStyle === "mixed")
  ) {
    bonus += 5;
  }

  if (preferences.workTime && preferences.workTime === job.workTime) bonus += 4;

  if (preferences.culture && preferences.culture === job.culture) bonus += 4;

  const jobActivityLevel = getActivityLevelByJobName(job.name);
  if (preferences.activityLevel && preferences.activityLevel === jobActivityLevel) bonus += 6;

  if (preferences.activityLevel === "desk" && cognitiveDeskJobs.has(job.name)) {
    bonus += 5;
  }

  if (preferences.environmentTheme) {
    const jobTheme = getEnvironmentThemeByJobName(job.name);

    if (preferences.environmentTheme === jobTheme) {
      bonus += 12;
    } else if (preferences.environmentTheme !== "city" && jobTheme === "city") {
      bonus -= 6;
    }
  }

  return bonus;
}

function scoreJob(scores, job, preferences) {
  const weighted =
    scores.autonomy * job.weights.autonomy +
    scores.collaboration * job.weights.collaboration +
    scores.communication * job.weights.communication +
    scores.flexibility * job.weights.flexibility;

  const base = weighted / 4;
  return Math.round(Math.min(100, base + preferenceBonus(job, preferences)));
}

function buildReason(scores, job) {
  const topMetric = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  const metricLabel = {
    autonomy: "자율성",
    collaboration: "협업 강도",
    communication: "소통 방식",
    flexibility: "근무 유연성"
  };

  return `${metricLabel[topMetric[0]]} 성향이 강하고, ${job.summary} 특성과 잘 맞아 상위 추천으로 분류되었습니다.`;
}

function buildAvoidEnvironments(scores) {
  const avoid = [];

  if (scores.flexibility < 45) avoid.push("잦은 야근과 갑작스러운 일정 변경이 많은 환경");
  if (scores.collaboration < 45) avoid.push("실시간 협업/회의가 과도하게 많은 환경");
  if (scores.autonomy < 45) avoid.push("목표가 모호하고 자기주도만 요구되는 환경");
  if (scores.communication < 45) avoid.push("문서화 없이 즉답 중심으로만 소통하는 환경");

  if (avoid.length === 0) {
    avoid.push("극단적으로 단일한 업무 방식만 강요하는 환경");
  }

  return avoid;
}

function calculateRecommendation(answers, preferences) {
  const coreScores = calculateCoreScores(answers);
  const labelMap = {
    workType: { remote: "원격", hybrid: "하이브리드", onsite: "상주" },
    collaborationStyle: { individual: "개인 중심", mixed: "혼합", team: "팀 협업 중심" },
    communicationStyle: { async: "비동기 중심", mixed: "혼합", realtime: "실시간 중심" },
    workTime: { fixed: "고정 시간", flexible: "유연 근무" },
    culture: { stable: "안정형", growth: "성장형", challenge: "도전형" },
    activityLevel: { desk: "앉아서 집중", balanced: "균형형", active: "움직임 많음" },
    environmentTheme: { city: "도시", coast: "바닷가", space: "우주 관련", mountain: "산", rural: "시골" }
  };

  const ranked = ALL_JOB_CATALOG.map((job) => {
    const fitScore = scoreJob(coreScores, job, preferences);
    return {
      name: job.name,
      fitScore,
      reason: buildReason(coreScores, job),
      description: job.description,
      environmentContext: job.environmentContext,
      weatherContext: job.weatherContext,
      keyTasks: job.keyTasks,
      requiredSkills: job.requiredSkills,
      prepChecklist: job.prepChecklist,
      fitEnvironment: {
        workType: labelMap.workType[job.workType],
        collaborationStyle: labelMap.collaborationStyle[job.collaborationStyle],
        communicationStyle: labelMap.communicationStyle[job.communicationStyle],
        workTime: labelMap.workTime[job.workTime],
        culture: labelMap.culture[job.culture],
        activityLevel: labelMap.activityLevel[getActivityLevelByJobName(job.name)],
        environmentTheme: labelMap.environmentTheme[getEnvironmentThemeByJobName(job.name)]
      }
    };
  }).sort((a, b) => b.fitScore - a.fitScore);

  const filteredByActivity = filterRankedByActivityTrack(ranked, preferences || {});
  const recommendationBase = filterRankedByEnvironmentTheme(
    filteredByActivity.length > 0 ? filteredByActivity : ranked,
    preferences || {}
  );
  const recommendations = pickRecommendationsWithDiversity(
    recommendationBase,
    preferences || {}
  );
  const selectedNames = new Set(recommendations.map((item) => item.name));
  const otherRecommendations = recommendationBase
    .filter((item) => !selectedNames.has(item.name));

  return {
    profile: {
      summary: profileSummary(coreScores),
      scores: coreScores
    },
    recommendations,
    otherRecommendations,
    avoidEnvironments: buildAvoidEnvironments(coreScores)
  };
}

module.exports = {
  calculateRecommendation,
  ANSWER_COUNT
};
