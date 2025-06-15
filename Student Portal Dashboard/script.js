const body = document.body;
const studentName = document.getElementById("studentName");
const studentEmail = document.getElementById("studentEmail");
const studentScore = document.getElementById("studentScore");
const studentCourse = document.getElementById("studentCourse");
const filterCourseInput = document.getElementById("filterCourse");
const addStduentBtn = document.getElementById("addStudentBtn");
const filterBtn = document.getElementById("filterBtn");
const topStudentBtn = document.getElementById("topStudentBtn");
const avgScoreBtn = document.getElementById("avgScoreBtn");
const showAllBtn = document.getElementById("showAllBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const outputBox = document.getElementById("outputBox");

let students = [];
const localStorageStudent = loadStudents();

function loadStudents() {
  const savedStudents = localStorage.getItem("students");
  if (savedStudents) {
    students = JSON.parse(savedStudents);
  }
  return students;
}

// Save products to localStorage
function saveStudentsLocal() {
  localStorage.setItem("students", JSON.stringify(students));
}

function clearOutBox() {
  outputBox.textContent = "";
}

function clearForm() {
  const allInputs = document.querySelectorAll("input:not(#filterCourse)");
  allInputs.forEach((input) => {
    input.value = "";
  });
}

const saveStudent = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !studentName.value.trim() ||
    !emailPattern.test(studentEmail.value) ||
    isNaN(studentScore.value) ||
    studentScore.value <= 0 ||
    studentScore.value > 100
  ) {
    alert("Please enter a valid name, email, and score (1-100)");
    return;
  }

  const newStudent = {
    name: studentName.value,
    email: studentEmail.value,
    score: Number(studentScore.value),
    course: studentCourse.value,
  };
  students.push(newStudent);
  clearForm();
  // Save to localStorage
  saveStudentsLocal();

  alert("student added succefully");
};

const showAllStudents = () => {
  clearOutBox();
  outputBox.textContent = JSON.stringify(students);
};

const filterCourse = () => {
  const filterCourse = filterCourseInput.value;
  const filterdCourse = students.filter(
    (student) => student.course === filterCourse
  );

  clearOutBox();
  outputBox.textContent = JSON.stringify(filterdCourse);
};

const topStudent = () => {
  const mostTopStudent = students.reduce((maxStudent, currentStudent) => {
    const currentValue = Number(currentStudent.score);
    const topStudent = Number(maxStudent.score);
    return currentValue > topStudent ? currentStudent : maxStudent;
  });
  outputBox.textContent = JSON.stringify(mostTopStudent);
};

const averageScore = () => {
  const studentsScore = students.map((student) => student.score);
  const sumofScores = studentsScore.reduce((acc, curr) => acc + curr, 0);
  outputBox.textContent = JSON.stringify(sumofScores / studentsScore.length);
};

const toggleTheme = () => {
  body.classList.toggle("dark");
};

loadStudents();

addStduentBtn.addEventListener("click", saveStudent);
showAllBtn.addEventListener("click", showAllStudents);
filterBtn.addEventListener("click", filterCourse);
topStudentBtn.addEventListener("click", topStudent);
avgScoreBtn.addEventListener("click", averageScore);
themeToggleBtn.addEventListener("click", toggleTheme);
