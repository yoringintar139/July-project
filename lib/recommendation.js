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
  }
];

function normalizeScore(avgLikert) {
  return Math.round(((avgLikert - 1) / 4) * 100);
}

function calculateCoreScores(answers) {
  const buckets = {
    autonomy: [answers[0], answers[1], answers[2]],
    collaboration: [answers[3], answers[4], answers[5]],
    communication: [answers[6], answers[7], answers[8]],
    flexibility: [answers[9], answers[10], answers[11]]
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
  const activeJobs = new Set([
    "간호사",
    "교사",
    "물류 관리자",
    "생산 관리자",
    "공급망 기획자"
  ]);

  const balancedJobs = new Set([
    "영업 기획",
    "HR 매니저",
    "프로젝트 매니저(PM)",
    "고객 성공 매니저(CSM)",
    "운영 매니저",
    "건축가",
    "전기 엔지니어",
    "기계 엔지니어",
    "구매 담당자",
    "법무 담당자"
  ]);

  if (activeJobs.has(jobName)) return "active";
  if (balancedJobs.has(jobName)) return "balanced";
  return "desk";
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
    analytics: new Set(["데이터 분석가", "재무 분석가", "회계사", "리서치 연구원"]),
    business: new Set(["프로젝트 매니저(PM)", "영업 기획", "운영 매니저", "고객 성공 매니저(CSM)", "HR 매니저"]),
    supply: new Set(["공급망 기획자", "물류 관리자", "구매 담당자", "생산 관리자"]),
    creative: new Set(["콘텐츠 기획자", "프로덕트 디자이너", "마케팅 전략", "영상 편집자", "카피라이터", "건축가"]),
    language: new Set(["통번역가"]),
    legal: new Set(["법무 담당자"]),
    educationMedical: new Set(["간호사", "교사"]),
    engineering: new Set(["기계 엔지니어", "전기 엔지니어"])
  };

  for (const [cluster, names] of Object.entries(clusters)) {
    if (names.has(jobName)) return cluster;
  }

  return "other";
}

function pickRecommendationsWithDiversity(ranked, preferences) {
  const topCandidates = ranked.slice(0, 12);

  if (preferences.activityLevel !== "desk") {
    return topCandidates.slice(0, 3);
  }

  const selected = [];
  const usedClusters = new Set();

  for (const candidate of topCandidates) {
    const cluster = getJobClusterByName(candidate.name);
    if (usedClusters.has(cluster)) continue;

    selected.push(candidate);
    usedClusters.add(cluster);

    if (selected.length === 3) break;
  }

  if (selected.length < 3) {
    for (const candidate of topCandidates) {
      if (selected.some((item) => item.name === candidate.name)) continue;
      selected.push(candidate);
      if (selected.length === 3) break;
    }
  }

  return selected;
}

function preferenceBonus(job, preferences) {
  let bonus = 0;

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
    activityLevel: { desk: "앉아서 집중", balanced: "균형형", active: "움직임 많음" }
  };

  const ranked = JOB_CATALOG.map((job) => {
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
        activityLevel: labelMap.activityLevel[getActivityLevelByJobName(job.name)]
      }
    };
  }).sort((a, b) => b.fitScore - a.fitScore);

  const recommendations = pickRecommendationsWithDiversity(ranked, preferences || {});

  return {
    profile: {
      summary: profileSummary(coreScores),
      scores: coreScores
    },
    recommendations,
    avoidEnvironments: buildAvoidEnvironments(coreScores)
  };
}

module.exports = {
  calculateRecommendation
};
