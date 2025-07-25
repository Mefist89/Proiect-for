// Полностью переведенный файл с вопросами
const questions = [
    {
        question: {
            ro: "Ce este instrucțiunea if în C++ și care este scopul ei principal?",
            en: "What is the 'if' statement in C++ and what is its main purpose?"
        },
        options: {
            ro: ["O instrucțiune care testează o condiție și execută un bloc de cod dacă aceasta este adevărată.", "O instrucțiune folosită pentru a repeta un set de instrucțiuni.", "O structură utilizată pentru a parcurge elemente dintr-un array.", "O metodă de a crea o funcție nouă."],
            en: ["A statement that tests a condition and executes a block of code if it is true.", "A statement used to repeat a set of instructions.", "A structure used to iterate through elements of an array.", "A method to create a new function."]
        },
        answer: 0
    },
    {
        question: {
            ro: "Cum funcționează instrucțiunea if-else și în ce situații este utilizată?",
            en: "How does the 'if-else' statement work and in what situations is it used?"
        },
        options: {
            ro: ["Permite repetarea unei secvențe de cod până când o condiție devine falsă.", "Verifică o condiție; dacă este adevărată, execută codul specificat, altfel execută alt cod.", "Este utilizată pentru operații matematice complexe.", "Servește doar la verificarea condițiilor numerice."],
            en: ["It allows repeating a code sequence until a condition becomes false.", "It checks a condition; if it is true, it executes the specified code, otherwise it executes other code.", "It is used for complex mathematical operations.", "It only serves to check numerical conditions."]
        },
        answer: 1
    },
    {
        question: {
            ro: "Care este diferența între if-else și switch în C++?",
            en: "What is the difference between 'if-else' and 'switch' in C++?"
        },
        options: {
            ro: ["switch poate evalua expresii logice, if-else nu.", "if-else permite verificarea mai multor condiții, switch doar a unui caz specific.", "if-else este mai rapid decât switch.", "Nu există nicio diferență între ele."],
            en: ["'switch' can evaluate logical expressions, 'if-else' cannot.", "'if-else' allows checking multiple conditions, while 'switch' only checks a specific case.", "'if-else' is faster than 'switch'.", "There is no difference between them."]
        },
        answer: 1
    },
    {
        question: {
            ro: "Cum se scrie o instrucțiune if care verifică mai multe condiții simultan?",
            en: "How do you write an 'if' statement that checks multiple conditions simultaneously?"
        },
        options: {
            ro: ["Se scriu mai multe instrucțiuni if una după alta.", "Se utilizează un switch.", "Se folosesc operatorii logici && și ||.", "Se folosește doar operatorul =."],
            en: ["Write multiple 'if' statements one after another.", "Use a 'switch' statement.", "Use the logical operators && and ||.", "Use only the = operator."]
        },
        answer: 2
    },
    {
        question: {
            ro: "Scrieți sintaxa corectă pentru o instrucțiune if care verifică dacă un număr este pozitiv.",
            en: "Write the correct syntax for an 'if' statement that checks if a number is positive."
        },
        options: {
            ro: ["if(num >= 0)", "if(num == 0)", "if(num < 0)", "if(num > 0)"],
            en: ["if(num >= 0)", "if(num == 0)", "if(num < 0)", "if(num > 0)"]
        },
        answer: 3
    },
    {
        question: {
            ro: "Cum putem verifica dacă un număr este cuprins între 10 și 50 folosind if?",
            en: "How can we check if a number is between 10 and 50 using an 'if' statement?"
        },
        options: {
            ro: ["if(num > 10 || num < 50)", "if(num >= 10 && num <= 50)", "if(num >= 10 || num <= 50)", "if(num > 10 && num < 50)"],
            en: ["if(num > 10 || num < 50)", "if(num >= 10 && num <= 50)", "if(num >= 10 || num <= 50)", "if(num > 10 && num < 50)"]
        },
        answer: 1
    },
    {
        question: {
            ro: "Ce se întâmplă dacă omitem blocul else după un if?",
            en: "What happens if we omit the 'else' block after an 'if'?"
        },
        options: {
            ro: ["Programul generează o eroare.", "Se va executa întotdeauna un bloc gol.", "Nimic, codul funcționează normal.", "Instrucțiunea if nu funcționează."],
            en: ["The program generates an error.", "An empty block will always be executed.", "Nothing, the code works normally.", "The 'if' statement does not work."]
        },
        answer: 2
    },
    {
        question: {
            ro: "Este posibil să avem un if fără paranteze {}? Ce se întâmplă în acest caz?",
            en: "Is it possible to have an 'if' without braces {}? What happens in this case?"
        },
        options: {
            ro: ["Da, dar doar prima linie după if va fi executată.", "Da, și toate liniile vor fi executate.", "Nu, este obligatoriu să folosim paranteze.", "Nu, va apărea o eroare la compilare."],
            en: ["Yes, but only the first line after the 'if' will be executed.", "Yes, and all lines will be executed.", "No, it is mandatory to use braces.", "No, a compilation error will occur."]
        },
        answer: 0
    },
    {
        question: {
            ro: "Care este scopul instrucțiunii switch în C++?",
            en: "What is the purpose of the 'switch' statement in C++?"
        },
        options: {
            ro: ["Să repete o secvență de cod.", "Să evalueze o expresie și să aleagă un caz pe baza rezultatului.", "Să combine mai multe condiții logice.", "Să organizeze variabile în funcții."],
            en: ["To repeat a sequence of code.", "To evaluate an expression and choose a case based on the result.", "To combine multiple logical conditions.", "To organize variables into functions."]
        },
        answer: 1
    },
    {
        question: {
            ro: "Ce tipuri de date pot fi utilizate ca expresie în instrucțiunea switch?",
            en: "What data types can be used as an expression in a 'switch' statement?"
        },
        options: {
            ro: ["int, char și enum.", "int, char și float.", "Doar int.", "Orice tip de date."],
            en: ["int, char, and enum.", "int, char, and float.", "Only int.", "Any data type."]
        },
        answer: 0
    },
    {
        question: {
            ro: "Este obligatoriu să includem un bloc default în switch? Ce se întâmplă dacă lipsește?",
            en: "Is it mandatory to include a 'default' block in a 'switch'? What happens if it's missing?"
        },
        options: {
            ro: ["Da, altfel codul nu se compilează.", "Nu, dar dacă lipsește și niciun caz nu este potrivit, nu se va executa nimic.", "Da, pentru a preveni erori.", "Nu, dar dacă lipsește și niciun caz nu este potrivit, nu se va executa nimic."],
            en: ["Yes, otherwise the code will not compile.", "No, but if it is missing and no case matches, nothing will be executed.", "Yes, to prevent errors.", "No, but if it's missing and no case matches, nothing will be executed."]
        },
        answer: 3
    },
    {
        question: {
            ro: "Cum putem combina if și switch într-un program?",
            en: "How can we combine 'if' and 'switch' in a program?"
        },
        options: {
            ro: ["Utilizăm switch în interiorul unui if.", "Nu este posibil să le combinăm.", "Folosim ambele separat pentru cazuri diferite.", "Utilizăm if doar pentru verificarea numerelor mari."],
            en: ["Use a 'switch' inside an 'if'.", "It's not possible to combine them.", "Use them separately for different cases.", "Use 'if' only for checking large numbers."]
        },
        answer: 1
    },
    {
        question: {
            ro: "Scrieți un exemplu de switch care afișează ziua săptămânii pe baza unui număr. Ce caz este potrivit pentru numărul 3?",
            en: "Write an example of a 'switch' that displays the day of the week based on a number. Which case is appropriate for the number 3?"
        },
        options: {
            ro: ["case 3: 'Marți'", "case 3: 'Miercuri'", "case 3: 'Joi'", "case 3: 'Luni'"],
            en: ["case 3: 'Tuesday'", "case 3: 'Wednesday'", "case 3: 'Thursday'", "case 3: 'Monday'"]
        },
        answer: 2
    },
    {
        question: {
            ro: "Ce rol joacă instrucțiunea break într-un switch?",
            en: "What role does the 'break' statement play in a 'switch'?"
        },
        options: {
            ro: ["Oprește execuția cazurilor următoare dacă un caz este adevărat.", "Inițializează următorul caz.", "Nu are niciun rol.", "Permite execuția tuturor cazurilor din switch."],
            en: ["It stops the execution of subsequent cases if a case is true.", "It initializes the next case.", "It has no role.", "It allows all cases in the 'switch' to be executed."]
        },
        answer: 1
    }
];


// --- ОСТАЛЬНАЯ ЧАСТЬ КОДА ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ ---

// Перемешиваем массив, чтобы вопросы были случайными
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Выбираем 7 случайных вопросов. Можно изменить на questions.length, чтобы использовать все.
const selectedQuestions = shuffle([...questions]).slice(0, 7);

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const lang = localStorage.getItem('language') || 'ro';
    if (currentQuestion >= selectedQuestions.length) return; // Предотвращаем ошибку, если вопросы закончились
    
    const q = selectedQuestions[currentQuestion];
    
    document.getElementById("question").textContent = q.question[lang];
    
    const optionsContainer = document.getElementById("options");
    const options = optionsContainer.children;
    
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = q.options[lang][i];
        options[i].className = "";
        options[i].disabled = false;
    }
}

function checkAnswer(selected) {
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
            const lang = localStorage.getItem('language') || 'ro';
            const finalMessage = lang === 'ro' ? 'Scor Final' : 'Final Score';
            document.getElementById("quiz").innerHTML = `<div class='score'>${finalMessage}: ${score}/${selectedQuestions.length}</div>`;
        }
        const scorePrefix = localStorage.getItem('language') === 'ro' ? 'Scor' : 'Score';
        document.getElementById("score").textContent = `${scorePrefix}: ${score}`;
    }, 3000);
}

// Начальная загрузка вопроса
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadQuestion);
} else {
    loadQuestion();
}