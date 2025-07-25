// Файл: /js/chellange.js - ПОЛНОСТЬЮ ПЕРЕВЕДЕН

const questions = [
  {
    question: {
      ro: "Ce este instrucțiunea FOR în C++ și care este scopul ei principal?",
      en: "What is the FOR statement in C++ and what is its main purpose?"
    },
    options: {
      ro: ["O instrucțiune pentru verificarea condițiilor logice.", "O instrucțiune utilizată pentru a repeta un set de instrucțiuni de un număr specificat de ori.", "Un tip de funcție pentru calcularea valorilor.", "O metodă pentru manipularea fișierelor."],
      en: ["A statement for checking logical conditions.", "A statement used to repeat a set of instructions a specified number of times.", "A type of function for calculating values.", "A method for file manipulation."]
    },
    answer: 1,
  },
  {
    question: {
      ro: "Care este structura de bază a unei instrucțiuni FOR în C++?",
      en: "What is the basic structure of a FOR statement in C++?"
    },
    options: {
      ro: ["if (condiție) { // cod }", "for (inițializare; condiție; incrementare) { // cod }", "for (condiție) { // cod }", "while (condiție) { // cod }"],
      en: ["if (condition) { // code }", "for (initialization; condition; increment) { // code }", "for (condition) { // code }", "while (condition) { // code }"]
    },
    answer: 1,
  },
  {
    question: {
      ro: "Cum funcționează instrucțiunea FOR?",
      en: "How does the FOR statement work?"
    },
    options: {
      ro: ["Execută o singură dată un set de instrucțiuni.", "Verifică o condiție logică fără a repeta.", "Execută un set de instrucțiuni pentru fiecare valoare a unui interval specificat.", "Este utilizată pentru a organiza codul în funcții separate."],
      en: ["It executes a set of instructions only once.", "It checks a logical condition without repeating.", "It executes a set of instructions for each value in a specified range.", "It is used to organize code into separate functions."]
    },
    answer: 2,
  },
  {
    question: {
      ro: "Ce se întâmplă dacă condiția dintr-un FOR este întotdeauna adevărată?",
      en: "What happens if the condition in a FOR loop is always true?"
    },
    options: {
      ro: ["Produce o eroare de compilare.", "Se oprește imediat.", "Execută doar o singură iterație.", "Se generează o buclă infinită."],
      en: ["It produces a compilation error.", "It stops immediately.", "It executes only a single iteration.", "An infinite loop is generated."]
    },
    answer: 3,
  },
  {
    question: {
      ro: "Care este rolul expresiei de incrementare din instrucțiunea FOR?",
      en: "What is the role of the increment expression in the FOR statement?"
    },
    options: {
      ro: ["Inițializează variabila de control.", "Modifică variabila de control după fiecare iterație.", "Verifică condiția pentru fiecare iterație.", "Oprește execuția buclei."],
      en: ["It initializes the control variable.", "It modifies the control variable after each iteration.", "It checks the condition for each iteration.", "It stops the loop's execution."]
    },
    answer: 1,
  },
  {
    question: {
      ro: "Cum poate fi folosit FOR pentru a calcula suma numerelor de la 1 la 10?",
      en: "How can FOR be used to calculate the sum of numbers from 1 to 10?"
    },
    options: {
      ro: ["Prin crearea unei funcții recursive.", "Prin scrierea unui singur apel de funcție.", "Folosind o instrucțiune IF într-o buclă infinită.", "Prin iterarea variabilei de control și adăugarea ei la o sumă cumulativă."],
      en: ["By creating a recursive function.", "By writing a single function call.", "By using an IF statement in an infinite loop.", "By iterating the control variable and adding it to a cumulative sum."]
    },
    answer: 3,
  },
  {
    question: {
      ro: "Ce se întâmplă dacă uităm să includem o expresie de incrementare în FOR?",
      en: "What happens if we forget to include an increment expression in a FOR loop?"
    },
    options: {
      ro: ["Bucla poate deveni infinită.", "Bucla se va opri automat după prima iterație.", "Bucla nu se va executa deloc.", "Va produce o eroare la compilare."],
      en: ["The loop can become infinite.", "The loop will automatically stop after the first iteration.", "The loop will not execute at all.", "It will produce a compilation error."]
    },
    answer: 0,
  },
  {
    question: {
      ro: "Cum afișăm toate valorile pare între 1 și 10 folosind FOR?",
      en: "How do we display all even values between 1 and 10 using FOR?"
    },
    options: {
      ro: ["Se poate face doar cu WHILE, nu cu FOR.", "Iterăm doar valorile impare.", "Iterăm de la 1 la 10 și verificăm dacă numărul este par.", "Utilizăm o funcție specială pentru numere pare."],
      en: ["It can only be done with WHILE, not with FOR.", "We iterate only the odd values.", "We iterate from 1 to 10 and check if the number is even.", "We use a special function for even numbers."]
    },
    answer: 2,
  },
  {
    question: {
      ro: "Ce rol joacă variabila de control într-un FOR?",
      en: "What role does the control variable play in a FOR loop?"
    },
    options: {
      ro: ["Verifică condiția finală.", "Stochează rezultatul buclei.", "Determină numărul de iterații.", "Declanșează ieșirea din buclă."],
      en: ["It checks the final condition.", "It stores the result of the loop.", "It determines the number of iterations.", "It triggers the exit from the loop."]
    },
    answer: 2,
  },
  {
    question: {
      ro: "Este posibil să avem un FOR fără o condiție explicită?",
      en: "Is it possible to have a FOR loop without an explicit condition?"
    },
    options: {
      ro: ["Nu, o condiție este obligatorie.", "Da, dar doar cu variabile globale.", "Da, dar trebuie să folosim instrucțiuni suplimentare pentru a ieși din buclă.", "Nu, va apărea o eroare la compilare."],
      en: ["No, a condition is mandatory.", "Yes, but only with global variables.", "Yes, but we must use additional statements to exit the loop.", "No, a compilation error will occur."]
    },
    answer: 2,
  },
  {
    question: {
      ro: "Cum poate fi utilizat FOR pentru a parcurge un array?",
      en: "How can FOR be used to iterate through an array?"
    },
    options: {
      ro: ["Folosind indexul elementelor array-ului în instrucțiunea FOR.", "Folosind o buclă WHILE și incrementând manual indexul.", "FOR nu poate parcurge un array.", "Prin combinarea cu instrucțiunea IF."],
      en: ["By using the array elements' index in the FOR statement.", "By using a WHILE loop and manually incrementing the index.", "FOR cannot iterate through an array.", "By combining it with the IF statement."]
    },
    answer: 0,
  },
  {
    question: {
      ro: "Ce valoare va avea variabila de control după ieșirea din buclă dacă FOR parcurge de la 0 la 9?",
      en: "What value will the control variable have after exiting the loop if FOR iterates from 0 to 9?"
    },
    options: {
      ro: ["9", "10", "Depinde de condiția buclei.", "Valoarea nu este definită."],
      en: ["9", "10", "It depends on the loop's condition.", "The value is not defined."]
    },
    answer: 1,
  },
  {
    question: {
      ro: "Cum evităm buclele infinite în FOR?",
      en: "How do we avoid infinite loops in FOR?"
    },
    options: {
      ro: ["Prin utilizarea expresiilor corecte de inițializare, condiție și incrementare.", "Prin utilizarea unei funcții break.", "FOR nu poate crea bucle infinite.", "Oprind programul manual."],
      en: ["By using correct initialization, condition, and increment expressions.", "By using a break statement.", "FOR cannot create infinite loops.", "By stopping the program manually."]
    },
    answer: 0,
  },
  {
    question: {
      ro: "Care este diferența principală între FOR și WHILE?",
      en: "What is the main difference between FOR and WHILE?"
    },
    options: {
      ro: ["FOR are toate expresiile într-o singură linie, WHILE necesită mai multe linii.", "WHILE este mai rapid decât FOR.", "WHILE poate parcurge doar liste.", "FOR nu poate fi folosit pentru numere negative."],
      en: ["FOR has all expressions in a single line, WHILE requires multiple lines.", "WHILE is faster than FOR.", "WHILE can only iterate through lists.", "FOR cannot be used for negative numbers."]
    },
    answer: 0,
  },
  {
    question: {
      ro: "Ce se întâmplă dacă omit inițializarea variabilei de control într-un FOR?",
      en: "What happens if I omit the control variable initialization in a FOR loop?"
    },
    options: {
      ro: ["Programul se oprește.", "Variabila de control ia automat valoarea 0.", "Instrucțiunea FOR poate funcționa dacă variabila a fost inițializată anterior.", "Bucla nu se execută."],
      en: ["The program stops.", "The control variable automatically takes the value 0.", "The FOR statement can work if the variable was previously initialized.", "The loop does not execute."]
    },
    answer: 2,
  },
  {
    question: {
      ro: "Cum ieșim manual dintr-o buclă FOR?",
      en: "How do we manually exit a FOR loop?"
    },
    options: {
      ro: ["Folosind instrucțiunea break.", "Folosind instrucțiunea continue.", "Schimbând expresia de incrementare.", "Prin modificarea variabilei de control în afara buclei."],
      en: ["Using the break statement.", "Using the continue statement.", "By changing the increment expression.", "By modifying the control variable outside the loop."]
    },
    answer: 0,
  },
  {
    question: {
      ro: "Ce rol joacă instrucțiunea continue într-un FOR?",
      en: "What role does the 'continue' statement play in a FOR loop?"
    },
    options: {
      ro: ["Opresc complet bucla.", "Ignoră restul codului din iterația curentă și trece la următoarea.", "Finalizează execuția programului.", "Nu are niciun efect asupra buclei FOR."],
      en: ["It stops the loop completely.", "It ignores the rest of the code in the current iteration and moves to the next one.", "It terminates the program's execution.", "It has no effect on the FOR loop."]
    },
    answer: 1,
  },
  {
    question: {
      ro: "Cum putem face ca FOR să parcurgă doar numere impare între 1 și 10?",
      en: "How can we make a FOR loop iterate only through odd numbers between 1 and 10?"
    },
    options: {
      ro: ["Modificând condiția pentru a verifica numerele impare.", "Folosind o buclă WHILE în interiorul FOR.", "Utilizând o expresie de incrementare care sare peste numere pare.", "Nu este posibil cu FOR."],
      en: ["By modifying the condition to check for odd numbers.", "By using a WHILE loop inside the FOR loop.", "By using an increment expression that skips even numbers (e.g., i += 2).", "It is not possible with FOR."]
    },
    answer: 2,
  },
  {
    question: {
      ro: "Ce se întâmplă dacă condiția din FOR este falsă de la început?",
      en: "What happens if the condition in a FOR loop is false from the beginning?"
    },
    options: {
      ro: ["Bucla se execută o dată.", "Bucla nu se execută deloc.", "Bucla generează o eroare.", "Bucla se execută infinit."],
      en: ["The loop executes once.", "The loop does not execute at all.", "The loop generates an error.", "The loop runs infinitely."]
    },
    answer: 1,
  },
  {
    question: {
      ro: "Este posibil să folosim mai multe variabile de control într-un singur FOR?",
      en: "Is it possible to use multiple control variables in a single FOR loop?"
    },
    options: {
      ro: ["Nu, FOR permite doar o variabilă de control.", "Da, prin utilizarea unei liste.", "Da, dacă sunt separate prin virgulă.", "Doar dacă se folosește un vector."],
      en: ["No, FOR only allows one control variable.", "Yes, by using a list.", "Yes, if they are separated by a comma.", "Only if a vector is used."]
    },
    answer: 2,
  },
];

// --- ОСТАЛЬНАЯ ЧАСТЬ КОДА ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ ---

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const selectedQuestions = shuffle([...questions]).slice(0, 10);
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const lang = localStorage.getItem('language') || 'ro';
  if (currentQuestion >= selectedQuestions.length) return;

  const q = selectedQuestions[currentQuestion];
  document.getElementById("question").textContent = q.question[lang];
  
  const options = document.getElementById("options").children;
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = q.options[lang][i];
    options[i].className = "";
    options[i].disabled = false;
  }
}

function checkAnswer(selected) {
    const lang = localStorage.getItem('language') || 'ro';
    const options = document.getElementById("options").children;
    const correctAnswer = selectedQuestions[currentQuestion].answer;

    if (selected === correctAnswer) {
        options[selected].classList.add("correct");
        score++;
    } else {
        options[selected].classList.add("wrong");
        options[correctAnswer].classList.add("correct");
    }

    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < selectedQuestions.length) {
            loadQuestion();
        } else {
            const finalMessage = lang === 'ro' ? 'Scor Final' : 'Final Score';
            document.getElementById("quiz").innerHTML = `<div class='score'>${finalMessage}: ${score}/${selectedQuestions.length}</div>`;
        }
        const scorePrefix = lang === 'ro' ? 'Scor' : 'Score';
        document.getElementById("score").textContent = `${scorePrefix}: ${score}`;
    }, 3000);
}

document.addEventListener('DOMContentLoaded', loadQuestion);

function checkAnswersProbe4() {
  const lang = localStorage.getItem('language') || 'ro';
  const correctAnswers = [
    "int i = 1; i <= 100; i++", "i % 2 == 0", "sum += i;", "i % 2 != 0", "multiplication *= i;",
  ];

  const userAnswers = [
    document.getElementById("forLoop").value.trim(), document.getElementById("evenCondition").value.trim(),
    document.getElementById("evenAction").value.trim(), document.getElementById("oddCondition").value.trim(),
    document.getElementById("oddAction").value.trim(),
  ];

  let correct = userAnswers.every((answer, index) => answer === correctAnswers[index]);
  
  const result = document.getElementById("result4");
  if (correct) {
    result.textContent = lang === 'ro' ? "Toate răspunsurile sunt corecte! Bravo!" : "All answers are correct! Well done!";
    result.style.color = "green";
  } else {
    result.textContent = lang === 'ro' ? "Unele răspunsuri sunt greșite. Mai încearcă!" : "Some answers are wrong. Try again!";
    result.style.color = "red";
  }
}