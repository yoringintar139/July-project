const express = require("express");
const path = require("path");
const { calculateRecommendation } = require("./lib/recommendation");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/recommend", (req, res) => {
  const { answers, preferences } = req.body;

  if (!Array.isArray(answers) || answers.length !== 12) {
    return res.status(400).json({
      message: "answers는 12개 문항의 배열이어야 합니다."
    });
  }

  if (!answers.every((value) => Number.isInteger(value) && value >= 1 && value <= 5)) {
    return res.status(400).json({
      message: "각 문항 점수는 1~5 정수여야 합니다."
    });
  }

  const result = calculateRecommendation(answers, preferences || {});
  return res.json(result);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
