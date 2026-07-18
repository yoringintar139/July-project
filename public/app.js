const QUESTION_SETS = {
  desk: [
    "명확한 지시 없이도 스스로 우선순위를 정해 일할 수 있다.",
    "업무 목표만 주어지면 방법은 자율적으로 결정하는 편이 좋다.",
    "내가 주도적으로 프로젝트를 이끌 때 성과가 잘 나온다.",
    "새로운 업무를 빠르게 익히고 실행으로 옮기는 편이다.",
    "긴 문서나 데이터를 읽고 핵심 논점을 빠르게 정리할 수 있다.",
    "다양한 팀과 잦게 소통하며 일하는 것이 편하다.",
    "회의나 브레인스토밍에서 아이디어를 나누는 과정이 즐겁다.",
    "혼자보다 팀 단위로 성과를 내는 환경이 더 잘 맞는다.",
    "다른 부서와 공동 목표를 맞춰가는 과정이 보람 있다.",
    "논리적인 근거를 바탕으로 상대를 설득하는 편이다.",
    "실시간 대화보다 문서/메신저 중심의 비동기 소통이 편하다.",
    "회의보다 기록된 자료를 기반으로 일할 때 집중이 잘 된다.",
    "즉답보다 충분히 생각 후 정리해서 소통하는 편이다.",
    "복잡한 내용을 글이나 자료로 체계적으로 설명하는 편이다.",
    "세부 기준과 규정을 확인하며 정확하게 처리하는 편이다.",
    "근무 시간과 장소를 유연하게 조절할 수 있어야 만족도가 높다.",
    "재택/하이브리드 근무가 가능하면 생산성이 더 높아진다.",
    "예상치 못한 일정 변경에도 비교적 유연하게 대응한다.",
    "새로운 도구/프로세스 도입을 빠르게 받아들이는 편이다.",
    "장시간 앉아서 사고하고 판단하는 업무가 잘 맞는다."
  ],
  active: [
    "예상치 못한 현장 이슈가 생겨도 우선순위를 빠르게 정리할 수 있다.",
    "외부 이동/대면 일정이 섞여도 업무 흐름을 스스로 관리할 수 있다.",
    "긴박한 상황에서 내가 먼저 판단해 팀을 움직이는 편이다.",
    "새로운 장비/도구를 익혀 현장에 바로 적용하는 것이 빠르다.",
    "몸을 많이 쓰는 일정이 이어져도 집중력을 유지하는 편이다.",
    "현장에서 여러 사람과 동시에 소통하며 일해도 에너지가 유지된다.",
    "실시간 협업과 역할 분담이 많은 환경이 오히려 잘 맞는다.",
    "팀원과 즉시 의견을 맞추며 문제를 푸는 과정이 익숙하다.",
    "부서/외부 파트너와 연속 조율하는 상황을 부담 없이 처리한다.",
    "활동량이 많은 날에도 표정과 톤을 안정적으로 유지할 수 있다.",
    "상황 보고와 공유를 짧고 정확하게 전달하는 데 자신 있다.",
    "전화/대면 등 즉시 소통 채널을 활용할 때 업무 효율이 높다.",
    "여러 이해관계자에게 같은 내용을 맥락에 맞춰 설명할 수 있다.",
    "바쁜 현장에서도 핵심 내용을 빠르게 기록하고 인계할 수 있다.",
    "운동 루틴이나 체력 관리 계획을 꾸준히 지키는 편이다.",
    "고정된 자리보다 이동이 있는 근무 형태가 더 맞는다.",
    "기상/교통 등 외부 변수로 계획이 바뀌어도 빠르게 대처한다.",
    "교대/변칙 일정에서도 컨디션과 집중도를 비교적 잘 유지한다.",
    "반복되는 돌발 상황에서도 회복이 빠르고 유연하게 적응한다.",
    "스포츠/운동 지도처럼 몸으로 시범을 보이며 설명하는 방식이 편하다."
  ]
};

function getQuestionsByActivityChoice(choice) {
  return choice === "active" ? QUESTION_SETS.active : QUESTION_SETS.desk;
}

const ENVIRONMENT_FIELDS = [
  {
    name: "workType",
    label: "희망 근무 형태",
    options: [
      { value: "remote", label: "원격" },
      { value: "hybrid", label: "하이브리드" },
      { value: "onsite", label: "상주" }
    ]
  },
  {
    name: "collaborationStyle",
    label: "희망 협업 강도",
    options: [
      { value: "individual", label: "개인 중심" },
      { value: "mixed", label: "혼합" },
      { value: "team", label: "팀 협업 중심" }
    ]
  },
  {
    name: "communicationStyle",
    label: "희망 소통 방식",
    options: [
      { value: "async", label: "비동기 중심" },
      { value: "mixed", label: "혼합" },
      { value: "realtime", label: "실시간 중심" }
    ]
  },
  {
    name: "workTime",
    label: "희망 근무 시간",
    options: [
      { value: "fixed", label: "고정 시간" },
      { value: "flexible", label: "유연 근무" }
    ]
  },
  {
    name: "culture",
    label: "선호 조직 문화",
    options: [
      { value: "stable", label: "안정형" },
      { value: "growth", label: "성장형" },
      { value: "challenge", label: "도전형" }
    ]
  },
  {
    name: "activityLevel",
    label: "희망 업무 활동량",
    options: [
      { value: "desk", label: "앉아서 집중" },
      { value: "balanced", label: "균형형" },
      { value: "active", label: "움직임 많음" }
    ]
  },
  {
    name: "environmentTheme",
    label: "희망 근무 환경",
    options: [
      { value: "city", label: "도시" },
      { value: "coast", label: "바닷가" },
      { value: "space", label: "우주 관련" },
      { value: "mountain", label: "산" },
      { value: "rural", label: "시골" }
    ]
  }
];

const ENVIRONMENT_LABELS = {
  workType: {
    remote: "원격",
    hybrid: "하이브리드",
    onsite: "상주"
  },
  collaborationStyle: {
    individual: "개인 중심",
    mixed: "혼합",
    team: "팀 협업 중심"
  },
  communicationStyle: {
    async: "비동기 중심",
    mixed: "혼합",
    realtime: "실시간 중심"
  },
  workTime: {
    fixed: "고정 시간",
    flexible: "유연 근무"
  },
  culture: {
    stable: "안정형",
    growth: "성장형",
    challenge: "도전형"
  },
  activityLevel: {
    desk: "앉아서 집중",
    balanced: "균형형",
    active: "움직임 많음"
  },
  environmentTheme: {
    city: "도시",
    coast: "바닷가",
    space: "우주 관련",
    mountain: "산",
    rural: "시골"
  }
};

const METRIC_LABELS = {
  autonomy: "자율성",
  collaboration: "협업 강도",
  communication: "소통 방식",
  flexibility: "근무 유연성"
};

const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const recommendationTitle = document.getElementById("recommendationTitle");
const toggleMoreJobsBtn = document.getElementById("toggleMoreJobsBtn");
const moreJobsSection = document.getElementById("moreJobsSection");
const moreJobsTitle = document.getElementById("moreJobsTitle");
const moreJobsList = document.getElementById("moreJobsList");
const introSection = document.getElementById("introSection");
const surveySection = document.getElementById("surveySection");
const resultSection = document.getElementById("resultSection");
const surveyForm = document.getElementById("surveyForm");
const progressBar = document.getElementById("progressBar");
const choiceActiveBtn = document.getElementById("choiceActive");
const choiceDeskBtn = document.getElementById("choiceDesk");

let introActivityChoice = "desk";

function setIntroActivityChoice(value) {
  introActivityChoice = value;
  if (choiceActiveBtn && choiceDeskBtn) {
    const isActive = value === "active";
    choiceActiveBtn.classList.toggle("selected", isActive);
    choiceDeskBtn.classList.toggle("selected", !isActive);
    choiceActiveBtn.setAttribute("aria-pressed", isActive ? "true" : "false");
    choiceDeskBtn.setAttribute("aria-pressed", isActive ? "false" : "true");
  }
}

function createLikertOptions(questionIndex) {
  const wrap = document.createElement("div");
  wrap.className = "likert";

  for (let value = 1; value <= 5; value += 1) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q-${questionIndex}`;
    input.value = String(value);
    if (value === 3) input.checked = true;

    input.addEventListener("change", updateProgress);

    const text = document.createElement("span");
    text.textContent = String(value);

    label.appendChild(input);
    label.appendChild(text);
    wrap.appendChild(label);
  }

  return wrap;
}

function createSelectField(name, label, options) {
  const row = document.createElement("div");
  row.className = "select-row";

  const labelEl = document.createElement("label");
  labelEl.htmlFor = name;
  labelEl.textContent = label;

  const select = document.createElement("select");
  select.id = name;
  select.name = name;

  options.forEach((option) => {
    const optionEl = document.createElement("option");
    optionEl.value = option.value;
    optionEl.textContent = option.label;
    select.appendChild(optionEl);
  });

  row.appendChild(labelEl);
  row.appendChild(select);
  return row;
}

function renderSurvey() {
  const questions = getQuestionsByActivityChoice(introActivityChoice);
  surveyForm.innerHTML = "";
  const template = document.getElementById("questionTemplate");

  const environmentTitle = document.createElement("h3");
  environmentTitle.textContent = "1단계. 원하는 업무 환경 설정";
  surveyForm.appendChild(environmentTitle);

  const environmentHelp = document.createElement("p");
  environmentHelp.className = "env-help";
  environmentHelp.textContent = "먼저 원하는 근무 환경을 선택해주세요. 이후 설문 결과와 함께 추천에 반영됩니다.";
  surveyForm.appendChild(environmentHelp);

  const envGrid = document.createElement("div");
  envGrid.className = "env-grid";
  ENVIRONMENT_FIELDS.forEach((field) => {
    envGrid.appendChild(createSelectField(field.name, field.label, field.options));
  });
  surveyForm.appendChild(envGrid);

  const surveyTitle = document.createElement("h3");
  surveyTitle.className = "survey-subtitle";
  surveyTitle.textContent = "2단계. 성향 진단 문항";
  surveyForm.appendChild(surveyTitle);

  questions.forEach((question, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".question-card");
    card.querySelector(".question-text").textContent = `${index + 1}. ${question}`;
    card.querySelector(".likert").replaceWith(createLikertOptions(index));
    surveyForm.appendChild(card);
  });

  const submitWrap = document.createElement("div");
  submitWrap.className = "submit-wrap";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "btn-primary";
  submitBtn.textContent = "결과 보기";

  submitWrap.appendChild(submitBtn);
  surveyForm.appendChild(submitWrap);

  updateProgress();
}

function updateProgress() {
  const questions = getQuestionsByActivityChoice(introActivityChoice);
  const selected = surveyForm.querySelectorAll("input[type='radio']:checked").length;
  const ratio = (selected / questions.length) * 100;
  progressBar.style.width = `${Math.min(100, ratio)}%`;
}

function readAnswers() {
  const questions = getQuestionsByActivityChoice(introActivityChoice);
  const answers = [];
  for (let index = 0; index < questions.length; index += 1) {
    const selected = surveyForm.querySelector(`input[name='q-${index}']:checked`);
    answers.push(Number(selected.value));
  }
  return answers;
}

function readPreferences() {
  return {
    workType: surveyForm.workType.value,
    collaborationStyle: surveyForm.collaborationStyle.value,
    communicationStyle: surveyForm.communicationStyle.value,
    workTime: surveyForm.workTime.value,
    culture: surveyForm.culture.value,
    activityLevel: surveyForm.activityLevel.value,
    environmentTheme: surveyForm.environmentTheme.value
  };
}

function renderResult(data) {
  if (recommendationTitle) {
    recommendationTitle.textContent = introActivityChoice === "active" ? "운동 관련 직업 추천 TOP 5" : "두뇌 중심 직업 추천 TOP 5";
  }
  if (moreJobsTitle) {
    moreJobsTitle.textContent = introActivityChoice === "active" ? "TOP 5 외 운동/현장 직업" : "TOP 5 외 생각/머리 중심 직업";
  }

  document.getElementById("profileSummary").textContent = `업무 환경 프로필: ${data.profile.summary}`;
  const selectedEnv = document.getElementById("selectedEnv");
  const env = readPreferences();
  selectedEnv.textContent = `선택 환경: ${ENVIRONMENT_LABELS.workType[env.workType]} / ${ENVIRONMENT_LABELS.collaborationStyle[env.collaborationStyle]} / ${ENVIRONMENT_LABELS.communicationStyle[env.communicationStyle]} / ${ENVIRONMENT_LABELS.workTime[env.workTime]} / ${ENVIRONMENT_LABELS.culture[env.culture]} / ${ENVIRONMENT_LABELS.activityLevel[env.activityLevel]} / ${ENVIRONMENT_LABELS.environmentTheme[env.environmentTheme]}`;

  const scoreGrid = document.getElementById("scoreGrid");
  scoreGrid.innerHTML = "";

  Object.entries(data.profile.scores).forEach(([key, value]) => {
    const item = document.createElement("div");
    item.className = "score-item";
    item.innerHTML = `
      <strong>${METRIC_LABELS[key]}</strong>
      <div>${value}점</div>
      <div class="meter"><span style="width: ${value}%"></span></div>
    `;
    scoreGrid.appendChild(item);
  });

  const recommendationList = document.getElementById("recommendationList");
  recommendationList.innerHTML = "";

  data.recommendations.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "result-card";

    const keyTasks = Array.isArray(item.keyTasks) ? item.keyTasks : ["업무 정보 준비 중"];
    const requiredSkills = Array.isArray(item.requiredSkills) ? item.requiredSkills : ["역량 정보 준비 중"];
    const prepChecklist = Array.isArray(item.prepChecklist) ? item.prepChecklist : ["체크리스트 준비 중"];
    const environmentContext = Array.isArray(item.environmentContext) ? item.environmentContext : ["주변 환경 정보 준비 중"];
    const weatherContext = Array.isArray(item.weatherContext) ? item.weatherContext : ["주변 날씨 정보 준비 중"];
    const fitEnvironment = item.fitEnvironment || {
      workType: "정보 준비 중",
      collaborationStyle: "정보 준비 중",
      communicationStyle: "정보 준비 중",
      workTime: "정보 준비 중",
      culture: "정보 준비 중",
      activityLevel: "정보 준비 중",
      environmentTheme: "정보 준비 중"
    };

    const taskItems = keyTasks.map((value) => `<li>${value}</li>`).join("");
    const skillBadges = requiredSkills.map((value) => `<span class=\"tag\">${value}</span>`).join("");
    const checklistItems = prepChecklist.map((value) => `<li>${value}</li>`).join("");
    const environmentItems = environmentContext.map((value) => `<li>${value}</li>`).join("");
    const weatherItems = weatherContext.map((value) => `<li>${value}</li>`).join("");

    card.innerHTML = `
      <h4>잘 맞는 순위 ${idx + 1}위. ${item.name}</h4>
      <p>${item.reason}</p>
      <p class="job-description">${item.description}</p>
      <p class="fit-env"><strong>잘 맞는 환경:</strong> ${fitEnvironment.workType} / ${fitEnvironment.collaborationStyle} / ${fitEnvironment.communicationStyle} / ${fitEnvironment.workTime} / ${fitEnvironment.culture} / ${fitEnvironment.activityLevel} / ${fitEnvironment.environmentTheme}</p>
      <div class="detail-grid">
        <section>
          <h5>주요 업무</h5>
          <ul>${taskItems}</ul>
        </section>
        <section>
          <h5>주변 환경</h5>
          <ul>${environmentItems}</ul>
        </section>
        <section>
          <h5>주변 날씨</h5>
          <ul>${weatherItems}</ul>
        </section>
        <section>
          <h5>필요 역량</h5>
          <div class="tag-wrap">${skillBadges}</div>
          <h5>지원 준비 체크리스트</h5>
          <ul>${checklistItems}</ul>
        </section>
      </div>
    `;
    recommendationList.appendChild(card);
  });

  if (moreJobsList) {
    moreJobsList.innerHTML = "";
    const otherRecommendations = Array.isArray(data.otherRecommendations) ? data.otherRecommendations : [];

    if (otherRecommendations.length === 0) {
      const empty = document.createElement("p");
      empty.className = "more-jobs-empty";
      empty.textContent = "현재 조건에서는 추가로 보여줄 추천 직업이 없습니다.";
      moreJobsList.appendChild(empty);
    } else {
      otherRecommendations.forEach((item, idx) => {
        const details = document.createElement("details");
        details.className = "more-job-details";

        const keyTasks = Array.isArray(item.keyTasks) ? item.keyTasks : [];
        const requiredSkills = Array.isArray(item.requiredSkills) ? item.requiredSkills : [];
        const prepChecklist = Array.isArray(item.prepChecklist) ? item.prepChecklist : [];

        const taskItems = keyTasks.map((value) => `<li>${value}</li>`).join("");
        const skillBadges = requiredSkills.map((value) => `<span class="tag">${value}</span>`).join("");
        const checklistItems = prepChecklist.map((value) => `<li>${value}</li>`).join("");

        details.innerHTML = `
          <summary>추가 추천 ${idx + 1}. ${item.name}</summary>
          <div class="more-job-body">
            <p>${item.reason}</p>
            <p class="job-description">${item.description}</p>
            <div class="detail-grid">
              <section>
                <h5>주요 업무</h5>
                <ul>${taskItems}</ul>
              </section>
              <section>
                <h5>필요 역량</h5>
                <div class="tag-wrap">${skillBadges}</div>
                <h5>지원 준비 체크리스트</h5>
                <ul>${checklistItems}</ul>
              </section>
            </div>
          </div>
        `;

        moreJobsList.appendChild(details);
      });
    }
  }

  if (moreJobsSection && toggleMoreJobsBtn) {
    moreJobsSection.classList.add("hidden");
    toggleMoreJobsBtn.textContent = "다른 직업 자세히 보기";
  }

  const avoidList = document.getElementById("avoidList");
  avoidList.innerHTML = "";
  data.avoidEnvironments.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    avoidList.appendChild(li);
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  const payload = {
    answers: readAnswers(),
    preferences: readPreferences()
  };

  const response = await fetch("/api/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    alert("추천 결과를 계산하는 중 오류가 발생했습니다.");
    return;
  }

  const result = await response.json();
  renderResult(result);
  surveySection.classList.add("hidden");
  resultSection.classList.remove("hidden");
}

startBtn.addEventListener("click", () => {
  renderSurvey();
  if (surveyForm.activityLevel) {
    surveyForm.activityLevel.value = introActivityChoice;
  }
  introSection.classList.add("hidden");
  surveySection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (choiceActiveBtn && choiceDeskBtn) {
  choiceActiveBtn.addEventListener("click", () => setIntroActivityChoice("active"));
  choiceDeskBtn.addEventListener("click", () => setIntroActivityChoice("desk"));
}

retryBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  introSection.classList.remove("hidden");
});

if (toggleMoreJobsBtn && moreJobsSection) {
  toggleMoreJobsBtn.addEventListener("click", () => {
    const isHidden = moreJobsSection.classList.contains("hidden");
    moreJobsSection.classList.toggle("hidden", !isHidden);
    toggleMoreJobsBtn.textContent = isHidden ? "자세히 보기 닫기" : "다른 직업 자세히 보기";
  });
}

surveyForm.addEventListener("submit", handleSubmit);

renderSurvey();
