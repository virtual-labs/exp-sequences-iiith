// --- Problems for Sequences Simulation ---
const problems = [
  {
    id: 1,
    title: "Arithmetic Progression (AP) nth Term",
    desc: "Given the first term a, common difference d, and integer n, compute the nth term of an arithmetic progression.",
    template: [
      "int main() {",
      "    int a, d, n;",
      '    scanf("%d %d %d", &a, &d, &n);',
      "    int nth = _____ + (n - 1) * _____; // blank 0, blank 1",
      '    printf("%d\\n", nth);',
      "    return 0;",
      "}",
    ],
    blanks: [
      { placeholder: "first term", answers: ["a"] },
      { placeholder: "common difference", answers: ["d"] },
    ],
    hints: [
      "What is the first term in the AP formula?",
      "What is multiplied by (n-1) in the AP formula?",
      "Recall the nth term formula: a + (n-1)*d.",
      "For a=2, d=3, n=5, output is 14.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For a=2, d=3, n=5, output is 14.",
  },
  {
    id: 2,
    title: "Sum of AP First n Terms",
    desc: "Given the first term a, common difference d, and integer n, compute the sum of the first n terms of an arithmetic progression.",
    template: [
      "int main() {",
      "    int a, d, n;",
      '    scanf("%d %d %d", &a, &d, &n);',
      "    int sum = n * (2 * _____ + (n - 1) * _____) / 2; // blank 0, blank 1",
      '    printf("%d\\n", sum);',
      "    return 0;",
      "}",
    ],
    blanks: [
      { placeholder: "first term", answers: ["a"] },
      { placeholder: "common difference", answers: ["d"] },
    ],
    hints: [
      "What is the first term in the AP sum formula?",
      "What is multiplied by (n-1) in the AP sum formula?",
      "Recall the sum formula: n/2 * [2a + (n-1)d]",
      "For a=2, d=3, n=5, output is 40.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For a=2, d=3, n=5, output is 40.",
  },
  {
    id: 3,
    title: "Geometric Progression (GP) nth Term",
    desc: "Given the first term a, common ratio r, and integer n, compute the nth term of a geometric progression.",
    template: [
      "int main() {",
      "    int a, r, n;",
      '    scanf("%d %d %d", &a, &r, &n);',
      "    int nth = _____; // blank 0: initial value",
      "    for (int i = 1; i < n; i++) {",
      "        nth = nth _____ _____; // blank 1, blank 2: operator, operator value",
      "    }",
      '    printf("%d\\n", nth);',
      "    return 0;",
      "}",
    ],
    blanks: [
      { placeholder: "initial value", answers: ["a"] },
      { placeholder: "operator", answers: ["*"] },
      { placeholder: "common ratio", answers: ["r"] },
    ],
    hints: [
      "What is the initial value for nth in GP?",
      "What operator is used between nth and r? (e.g., +, -, *, /)",
      "What variable is multiplied in each iteration?",
      "Recall the nth term formula for GP: a * r^(n-1)",
      "For a=2, r=3, n=4, output is 54.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For a=2, r=3, n=4, output is 54.",
  },
];

let currentProblem = null;
let compileSuccess = false;

// --- DOM Elements ---
const problemSelect = document.getElementById("problem-select");
const problemDesc = document.getElementById("problem-desc");
const codeTemplateDiv = document.getElementById("code-template");
const submitBtn = document.getElementById("submit-btn");
const runBtn = document.getElementById("run-btn");
const feedbackDiv = document.getElementById("feedback");
const runtimeOutputDiv = document.getElementById("runtime-output");
const hintLevelSelect = document.getElementById("hint-level");
const hintsDiv = document.getElementById("hints");

// --- UI Logic ---
document.addEventListener("DOMContentLoaded", () => {
  populateProblemDropdown();
  problemSelect.onchange = () => loadProblem(problemSelect.value);
  submitBtn.onclick = checkAnswers;
  runBtn.onclick = showRuntimeOutput;
  hintLevelSelect.onchange = () => showHints(+hintLevelSelect.value);
});

function populateProblemDropdown() {
  problemSelect.innerHTML = problems
    .map((p, i) => `<option value="${i}">Problem ${i + 1}</option>`)
    .join("");
  if (problems.length > 0) loadProblem(0);
}

function loadProblem(idx) {
  currentProblem = problems[idx];
  compileSuccess = false;
  problemDesc.textContent = currentProblem.desc;
  renderCodeTemplate();
  renderHints();
  feedbackDiv.textContent = "";
  runtimeOutputDiv.textContent = "";
  runBtn.disabled = true;
}

function renderCodeTemplate() {
  codeTemplateDiv.innerHTML = "";
  currentProblem.userInputs = Array(currentProblem.blanks.length).fill("");
  let blankIdx = 0;
  currentProblem.template.forEach((line) => {
    let html = line.replace(/_____+/g, () => {
      if (blankIdx >= currentProblem.blanks.length) return "_____";
      const blank = currentProblem.blanks[blankIdx];
      const input = `<input class=\"blank-input\" data-blank=\"${blankIdx}\" placeholder=\"${blank.placeholder}\" />`;
      blankIdx++;
      return input;
    });
    codeTemplateDiv.innerHTML += `<div class=\"template-line\">${html}</div>`;
  });
  // Attach input listeners
  codeTemplateDiv.querySelectorAll(".blank-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const bIdx = +e.target.getAttribute("data-blank");
      currentProblem.userInputs[bIdx] = e.target.value;
      feedbackDiv.textContent = "";
      runtimeOutputDiv.textContent = "";
      runBtn.disabled = true;
    });
  });
}

function renderHints() {
  hintLevelSelect.innerHTML = "";
  hintLevelSelect.innerHTML += `<option value="0" disabled selected>Hint 0</option>`;
  for (let i = 1; i <= currentProblem.hints.length; ++i) {
    hintLevelSelect.innerHTML += `<option value="${i}">Hint ${i}</option>`;
  }
  showHints(0);
}

function showHints(level) {
  if (level === 0) {
    hintsDiv.innerHTML = "";
    return;
  }
  hintsDiv.innerHTML = `<div class=\"hint\">${currentProblem.hints[level - 1]}</div>`;
}

function checkAnswers() {
  let allCorrect = true;
  let feedback = "";
  currentProblem.userInputs =
    currentProblem.userInputs || Array(currentProblem.blanks.length).fill("");
  currentProblem.blanks.forEach((blank, i) => {
    const userVal = (currentProblem.userInputs[i] || "").replace(/\s+/g, "");
    const correct = blank.answers.some(
      (a) => userVal === a.replace(/\s+/g, ""),
    );
    if (correct) {
      feedback += `<div class=\"feedback-correct\">Blank ${i + 1}: Correct</div>`;
    } else {
      feedback += `<div class=\"feedback-incorrect\">Blank ${i + 1}: Incorrect</div>`;
      allCorrect = false;
    }
  });
  feedbackDiv.innerHTML = feedback;
  compileSuccess = allCorrect;
  runBtn.disabled = !allCorrect;
}

function showRuntimeOutput() {
  runtimeOutputDiv.innerHTML = `<div class=\"feedback-all-correct\">${currentProblem.runtimeOutput}</div>`;
}
