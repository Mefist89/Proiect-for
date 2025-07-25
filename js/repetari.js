// Файл: /js/repetari.js

function verificaRaspunsurile() {
  const lang = localStorage.getItem('language') || 'ro';
  const raspunsuriCorecte = [5, 10, 10, 10, 4];
  const raspunsuriUtilizator = [
    parseInt(document.getElementById("q1").value), parseInt(document.getElementById("q2").value),
    parseInt(document.getElementById("q3").value), parseInt(document.getElementById("q4").value),
    parseInt(document.getElementById("q5").value),
  ];
  
  let corecte = raspunsuriUtilizator.filter((r, i) => r === raspunsuriCorecte[i]).length;

  const feedback = document.getElementById("feedback");
  
  if (lang === 'ro') {
    feedback.textContent = `Ai răspuns corect la ${corecte} din ${raspunsuriCorecte.length} întrebări.`;
  } else {
    feedback.textContent = `You answered ${corecte} out of ${raspunsuriCorecte.length} questions correctly.`;
  }
  
  feedback.style.color = corecte === raspunsuriCorecte.length ? "green" : "red";
}

// ПЕРЕИМЕНОВАННАЯ И ПЕРЕВЕДЕННАЯ ФУНКЦИЯ ДЛЯ ПРОБЫ #3
function checkAnswersProbe3() {
  const lang = localStorage.getItem('language') || 'ro';
  const answers = ["0", "1", "10", "i", "sum"];
  const userAnswers = [
    document.getElementById("blank1").value.trim(), document.getElementById("blank2").value.trim(),
    document.getElementById("blank3").value.trim(), document.getElementById("blank4").value.trim(),
    document.getElementById("blank5").value.trim(),
  ];

  let correct = userAnswers.every((answer, index) => answer === answers[index]);

  const result = document.getElementById("result3"); // Используем уникальный ID
  if (correct) {
    result.textContent = lang === 'ro' ? "Toate răspunsurile sunt corecte! Bravo!" : "All answers are correct! Well done!";
    result.style.color = "green";
  } else {
    result.textContent = lang === 'ro' ? "Unele răspunsuri sunt greșite. Mai încearcă!" : "Some answers are wrong. Try again!";
    result.style.color = "red";
  }
}