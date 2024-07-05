const skills = ["웹 개발", "앱 개발", "데이터 분석", "기계 학습"];

const skillBox = document.querySelector(".skillBox");

skills.forEach((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";
  skillDiv.textContent = skill;
  skillBox.appendChild(skillDiv);
});
