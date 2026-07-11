const QUESTIONS = [
  "명확한 지시 없이도 스스로 우선순위를 정해 일할 수 있다.",
  "업무 목표만 주어지면 방법은 자율적으로 결정하는 편이 좋다.",
  "내가 주도적으로 프로젝트를 이끌 때 성과가 잘 나온다.",
  "다양한 팀과 잦게 소통하며 일하는 것이 편하다.",
  "회의나 브레인스토밍에서 아이디어를 나누는 과정이 즐겁다.",
  "혼자보다 팀 단위로 성과를 내는 환경이 더 잘 맞는다.",
  "실시간 대화보다 문서/메신저 중심의 비동기 소통이 편하다.",
  "회의보다 기록된 자료를 기반으로 일할 때 집중이 잘 된다.",
  "즉답보다 충분히 생각 후 정리해서 소통하는 편이다.",
  "근무 시간과 장소를 유연하게 조절할 수 있어야 만족도가 높다.",
  "재택/하이브리드 근무가 가능하면 생산성이 더 높아진다.",
  "급격한 일정 변경이나 강한 마감 압박이 반복되면 스트레스를 크게 받는다."
];

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

  QUESTIONS.forEach((question, index) => {
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
  const selected = surveyForm.querySelectorAll("input[type='radio']:checked").length;
  const ratio = (selected / QUESTIONS.length) * 100;
  progressBar.style.width = `${Math.min(100, ratio)}%`;
}

function readAnswers() {
  const answers = [];
  for (let index = 0; index < QUESTIONS.length; index += 1) {
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
    activityLevel: surveyForm.activityLevel.value
  };
}

function renderResult(data) {
  document.getElementById("profileSummary").textContent = `업무 환경 프로필: ${data.profile.summary}`;
  const selectedEnv = document.getElementById("selectedEnv");
  const env = readPreferences();
  selectedEnv.textContent = `선택 환경: ${ENVIRONMENT_LABELS.workType[env.workType]} / ${ENVIRONMENT_LABELS.collaborationStyle[env.collaborationStyle]} / ${ENVIRONMENT_LABELS.communicationStyle[env.communicationStyle]} / ${ENVIRONMENT_LABELS.workTime[env.workTime]} / ${ENVIRONMENT_LABELS.culture[env.culture]} / ${ENVIRONMENT_LABELS.activityLevel[env.activityLevel]}`;

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
      activityLevel: "정보 준비 중"
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
      <p class="fit-env"><strong>잘 맞는 환경:</strong> ${fitEnvironment.workType} / ${fitEnvironment.collaborationStyle} / ${fitEnvironment.communicationStyle} / ${fitEnvironment.workTime} / ${fitEnvironment.culture} / ${fitEnvironment.activityLevel}</p>
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

surveyForm.addEventListener("submit", handleSubmit);

renderSurvey();
