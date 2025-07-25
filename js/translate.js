// 1. Словарь с переводами
const translations = {
  ro: {
    pageTitle: "Proiect de lectie : Instrucțiunea repetitivă cu contor FOR",
    logoText: "<i class='bx bxs-home'></i>Proiect",
    navHome: "Home",
    navEvocare: "Evocare",
    navRealizare: "Realizare",
    navReflectie: "Reflectie",
    navExtensie: "Extensie",
    navChallenge: "Challenge",
    heroTitle: "Proiect <span>de lectie</span><br>Instrucțiunea repetitivă <span>cu contor FOR</span>",
    shopSubtitle: "Proiect de lecție",
    shopTitle: "Etape ale activității didactice",
    card1Title: "Evocare",
    card1Desc: "Mini-quiz online la instrucțiunea IF și SWITCH",
    card2Title: "Realizarea sensului",
    card2Desc: "Formatul instrucțiunii FOR și rolul fiecărei componente",
    card3Title: "Reflecție",
    card3Desc: "Rezolvarea problemelor pe platformă",
    card4Title: "Extensie",
    card4Desc: "Rezolvarea problemelor pe platformă",
    startButton: "Start",
    challengeButton: "Start Challenge<i class='bx bxs-right-arrow' ></i>",
    resource1: "Manualul de informatică (Anatol Gremalschi, Iurie Mocanu, Ion Spinei, Ludmila Gremalschi, Clasa a X-a, 2020)",
    resource2: "Ghidul de implementare a curriculumului disciplinar pentru disciplina Informatica clasele X-XII, Chișinău, 2020",
    resource3: "Calculatorul, proiectorul sau tabla interactivă.",
    resource4: "Fișe cu exemple de sarcini online.",
    evaluationTitle: "Evaluarea lecției",
    evaluationDesc: "\"Evaluare formativă continuă pe parcursul lecției, prin exerciții practice evaluate pe onlinegdb și observarea activității. Produse: răspuns online, program funcțional rezolvat pe platformă și verificarea trecerii tuturor testelor.\"",
        // --- ДОБАВЛЕНО ДЛЯ EVOCARE.HTML ---
    evocareTitle: "Etapa : Evocare",
    evocareHero: "Test <span>Quiz</span>",
    evocareContactTitle: "Test Quiz",
    evocareContactDesc: "\"Elevii vor răspunde la 7 întrebări selectate aleatoriu din baza de întrebări pregătită, pentru a reactualiza cunoștințele din lecțiile precedente despre instrucțiunile <span> <strong>IF</strong> </span> și <span><strong>SWITCH</strong></span>\".",
    realizareTitle: "Etapa : Realizarea sensului",
    realizareHero: "Instrucţiunea repetitivă <span>FOR</span>",
    objective1: "să descrie și să înțeleagă structura detaliată a instrucțiunii For",
    objective2: "să identifice/explice modul de execuție a instrucțiunii FOR",
    objective3: "Să implementeze corect instrucțiunile în programele C++",
    objective4: "să respecte regulile de sintaxă și semantică la elaborarea programelor în C++",
    objective5: "să elaboreze programe în care se utilizează instrucțiunea în studiu",
    section1Title: "Repetarea acțiunilor",
    section1Para1: "Activitățile noastre cotidiene sunt de obicei formate din operații simple, care <span>se repetă</span> de mai multe ori. Pentru a face o plimbare, a merge de acasă la școală, la serviciu sau la magazin facem mai mulți pași. Traseul este parcurs prin <span>repetarea</span> pașilor",
    section1Para2: "Facem gimnastică sau mergem la sala de sport - <span>repetăm</span> exercițiile fizice fie de un număr de ori indicat de antrenor, fie până când obosim.",
    section2Title: "Instrucţiunea for",
    section2Para1: "Instrucţiunea<span> for </span> indică execuţia repetată a unei instrucţiuni în funcţie de valoarea unei variabile de control. Sintaxa instrucţiunii în studiu este: <br><span> for (Expresie_de_Initializare ; Expresie_de_Testare ; Expresie_de_Continuare) //Instructiune </span>",
    section3Title: "Exemplu cotidian",
    section3Para1: "Lungimea pistei este de 250 m. La lecția de educație fizică urmează să alergi 1 km. Antrenorul nu măsoară distanța parcursă de tine, ci numără câte circuite ai alergat. În momentul de start acestă valoare este 0, după primul circuit completat – 1, apoi 2, 3 și, în final – 4. Atunci te oprești din alergare.",
    section4Title: "Exemplu de problema",
    section4Para1: "Scrie un program în limbajul C++ care să calculeze factorialul unui număr întreg pozitiv n introdus de utilizator. Factorialul unui număr n, notat n!, este produsul tuturor numerelor întregi pozitive de la 1 la n. Programul trebuie să îndeplinească următoarele cerințe:",
    section4Para2: " 1. Solicită utilizatorului să introducă un număr întreg n;<br> 2. Calculează factorialul numărului n folosind o structură de control repetitivă <span>(for)</span>;<br> 3. Afișează rezultatul sub forma: \"Factorialul lui n este n!\".",
    sourceCodeButton: "Cod sursa <i class='bx bxs-right-arrow' ></i>",
    conclusionTitle: "Concluzie",
    conclusionDesc: "Instrucțiunea <span>for</span>  în C++ este un instrument fundamental pentru implementarea ciclurilor repetitive, fiind utilizată frecvent pentru a itera un număr determinat de pași sau pentru a parcurge elementele unui container, cum ar fi vectorii sau array-urile. Aceasta oferă o sintaxă clară și concisă, combinând inițializarea, condiția și incrementarea într-o singură structură.",
     // --- ДОБАВЛЕНО ДЛЯ REFLECTIE.HTML ---
    reflectieTitle: "Etapa : Reflectie",
    reflectieHero: "Fișa de lucru <span>FOR</span>",
    problem1: "Problema nr.1",
    problem2: "Problema nr.2",
    problem3: "Problema nr.3",
    problem4: "Problema nr.4",
    worksheetTitle: "Fișa de lucru",
    worksheetDesc: "Elevii se vor loga și vor lucra pe calculatoare utilizând website-ul <a href='https://onlinegdb.com/classroom/invite/s0TQozGTG' target='_blank'><strong><span>onlinegdb.com</span></strong></a> sau un alt mediu de programare. Aceștia vor elabora și modifica programe care aplică instrucțiunea <strong><span>FOR</span></strong>, vor analiza rezultatele obținute și vor verifica, tot pe website, dacă programele trec toate testele.",
    extensieTitle: "Etapa : Extensie",
    extensieHero: "Tema pentru <span>acasă</span>",
    problem5: "Problema nr.5",
    problem6: "Problema nr.6",
    homeworkTitle: "Tema pentru acasă",
    homeworkDesc: "Elevii se vor loga și vor lucra pe calculatoare utilizând website-ul <a href='https://onlinegdb.com/classroom/invite/s0TQozGTG' target='_blank'><strong><span>onlinegdb.com</span></strong></a> sau un alt mediu de programare. Aceștia vor elabora și modifica programe care aplică instrucțiunea <strong><span>FOR</span></strong>, vor analiza rezultatele obținute și vor verifica, tot pe website, dacă programele trec toate testele.",
    challengeTitle: "Etapa : Challenge",
    challengeHero: "Challenge <span>Page</span>",
    challengePageSubtitle: "Challenge Page",
    challengePageTitle: "Probe",
    probe1Title: "Quiz Online",
    probe2Title: "Număr repetări",
    probe3Title: "Spațiile libere",
    probe4Title: "Crearea programelor",
    miniQuizTitle: "Mini Quiz",
    probe1Subtitle: "Proba #1",
    repetitionsTitle: "Număr de repetări",
    probe2Subtitle: "Proba #2",
    tableHeader1: "Secvența de cod",
    tableHeader2: "Număr de iterații",
    placeholderInput: "Introduceți aici",
    checkAnswersBtn: "Verifică Răspunsurile",
    blanksTitle: "Spații libere",
    probe3Subtitle: "Proba #3",
    createProgramTitle: "Crează programa",
    probe4Subtitle: "Proba #4",
    table2Header1: "Condiția Problemei",
    table2Header2: "Cod C++",
    problemCondition: "Scrie un program care calculează suma numerelor pare și produsul numerelor impare între 1 și 100.",
    challengeFooterTitle: "Pagina Challenge",
    challengeFooterDesc: "\"Eelevii au răspuns la întrebări și au creat programe folosind instrucțiunea FOR și au primit feedback imediat. În cazurile dificile, au cerut indicii de la ChatGPT pentru a rezolva problemele autonom.\""
  },

  

  en: {
    pageTitle: "Lesson Project: The FOR loop statement",
    logoText: "<i class='bx bxs-home'></i>Project",
    navHome: "Home",
    navEvocare: "Evocation",
    navRealizare: "Internalization",
    navReflectie: "Reflection",
    navExtensie: "Extension",
    navChallenge: "Challenge",
    heroTitle: "Lesson <span>Project:</span><br>The repetitive statement <span>with a FOR counter</span>",
    shopSubtitle: "Lesson Project",
    shopTitle: "Stages of the didactic activity",
    card1Title: "Evocation",
    card1Desc: "Online mini-quiz on IF and SWITCH statements",
    card2Title: "Internalization",
    card2Desc: "Format of the FOR statement and the role of each component",
    card3Title: "Reflection",
    card3Desc: "Solving problems on the platform",
    card4Title: "Extension",
    card4Desc: "Solving problems on the platform",
    startButton: "Start",
    challengeButton: "Start Challenge<i class='bx bxs-right-arrow' ></i>",
    resource1: "Informatics Textbook (Anatol Gremalschi, Iurie Mocanu, Ion Spinei, Ludmila Gremalschi, 10th Grade, 2020)",
    resource2: "Implementation guide for the disciplinary curriculum for Informatics, grades 10-12, Chișinău, 2020",
    resource3: "Computer, projector, or interactive whiteboard.",
    resource4: "Worksheets with examples of online tasks.",
    evaluationTitle: "Lesson Evaluation",
    evaluationDesc: "\"Continuous formative assessment throughout the lesson, through practical exercises evaluated on onlinegdb and observation of activity. Products: online response, functional program solved on the platform, and verification of passing all tests.\"",
    evocareTitle: "Stage: Recall",
    evocareHero: "<span>Quiz</span> Test",
    evocareContactTitle: "Quiz Test",
    evocareContactDesc: "\"Students will answer 7 randomly selected questions from the prepared question base to refresh their knowledge from previous lessons about the <span> <strong>IF</strong> </span> and <span><strong>SWITCH</strong></span> instructions.\"",
    realizareTitle: "Stage: Comprehension",
    realizareHero: "The <span>FOR</span> repetitive statement",
    objective1: "to describe and understand the detailed structure of the For statement",
    objective2: "to identify/explain the execution mode of the FOR statement",
    objective3: "to correctly implement the instructions in C++ programs",
    objective4: "to respect syntax and semantics rules when developing C++ programs",
    objective5: "to develop programs using the statement under study",
    section1Title: "Repeating Actions",
    section1Para1: "Our daily activities are usually made up of simple operations that are <span>repeated</span> multiple times. To take a walk, to go from home to school, work, or the store, we take many steps. The route is covered by <span>repeating</span> these steps.",
    section1Para2: "We do gymnastics or go to the gym - we <span>repeat</span> physical exercises either a number of times indicated by the coach, or until we get tired.",
    section2Title: "The for statement",
    section2Para1: "The<span> for </span> statement indicates the repeated execution of a statement based on the value of a control variable. The syntax of the statement under study is: <br><span> for (Initialization_Expression; Test_Expression; Continuation_Expression) //Statement </span>",
    section3Title: "Everyday Example",
    section3Para1: "The track length is 250 m. In physical education class, you have to run 1 km. The coach does not measure the distance you have covered, but counts how many laps you have run. At the start, this value is 0, after the first completed lap – 1, then 2, 3, and finally – 4. Then you stop running.",
    section4Title: "Problem Example",
    section4Para1: "Write a program in C++ that calculates the factorial of a positive integer n entered by the user. The factorial of a number n, denoted n!, is the product of all positive integers from 1 to n. The program must meet the following requirements:",
    section4Para2: " 1. Prompt the user to enter an integer n;<br> 2. Calculate the factorial of n using a repetitive control structure <span>(for)</span>;<br> 3. Display the result in the form: \"The factorial of n is n!\".",
    sourceCodeButton: "Source Code <i class='bx bxs-right-arrow' ></i>",
    conclusionTitle: "Conclusion",
    conclusionDesc: "The <span>for</span> statement in C++ is a fundamental tool for implementing repetitive loops, frequently used to iterate a determined number of steps or to traverse the elements of a container, such as vectors or arrays. It provides a clear and concise syntax, combining initialization, condition, and increment into a single structure.",
    reflectieTitle: "Stage : Reflection",
    reflectieHero: "<span>FOR</span> Worksheet",
    problem1: "Problem no.1",
    problem2: "Problem no.2",
    problem3: "Problem no.3",
    problem4: "Problem no.4",
    worksheetTitle: "Worksheet",
    worksheetDesc: "Students will log in and work on computers using the <a href='https://onlinegdb.com/classroom/invite/s0TQozGTG' target='_blank'><strong><span>onlinegdb.com</span></strong></a> website or another programming environment. They will develop and modify programs that apply the <strong><span>FOR</span></strong> statement, analyze the results obtained, and verify on the website if the programs pass all tests.",
    extensieTitle: "Stage : Extension",
    extensieHero: "<span>Homework</span> Assignment",
    problem5: "Problem no.5",
    problem6: "Problem no.6",
    homeworkTitle: "Homework Assignment",
    homeworkDesc: "Students will log in and work on computers using the <a href='https://onlinegdb.com/classroom/invite/s0TQozGTG' target='_blank'><strong><span>onlinegdb.com</span></strong></a> website or another programming environment. They will develop and modify programs that apply the <strong><span>FOR</span></strong> statement, analyze the results obtained, and verify on the website if the programs pass all tests.",
    challengeTitle: "Stage : Challenge",
    challengeHero: "Challenge <span>Page</span>",
    challengePageSubtitle: "Challenge Page",
    challengePageTitle: "Tests",
    probe1Title: "Online Quiz",
    probe2Title: "Number of repetitions",
    probe3Title: "Fill in the blanks",
    probe4Title: "Program Creation",
    miniQuizTitle: "Mini Quiz",
    probe1Subtitle: "Test #1",
    repetitionsTitle: "Number of repetitions",
    probe2Subtitle: "Test #2",
    tableHeader1: "Code Snippet",
    tableHeader2: "Number of iterations",
    placeholderInput: "Enter here",
    checkAnswersBtn: "Check Answers",
    blanksTitle: "Fill in the blanks",
    probe3Subtitle: "Test #3",
    createProgramTitle: "Create the program",
    probe4Subtitle: "Test #4",
    table2Header1: "Problem Condition",
    table2Header2: "C++ Code",
    problemCondition: "Write a program that calculates the sum of even numbers and the product of odd numbers between 1 and 100.",
    challengeFooterTitle: "Challenge Page",
    challengeFooterDesc: "\"Students answered questions and created programs using the FOR statement and received immediate feedback. In difficult cases, they asked for hints from ChatGPT to solve the problems autonomously.\""
  }
};

// 2. Находим кнопки
const roButton = document.getElementById('lang-ro');
const enButton = document.getElementById('lang-en');

// 3. Функция смены языка
function setLanguage(lang) {
  // Находим все элементы для перевода
  const elements = document.querySelectorAll('[data-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    // Используем innerHTML, чтобы сохранить теги <span>, <br>, <i>
    element.innerHTML = translations[lang][key]; 
  });
  
  document.documentElement.lang = lang;

  // Сохраняем выбор языка в localStorage
  localStorage.setItem('language', lang);

  // Обновляем активную кнопку
  if (lang === 'ro') {
    roButton.classList.add('active');
    enButton.classList.remove('active');
  } else {
    enButton.classList.add('active');
    roButton.classList.remove('active');
  }
    if (typeof loadQuestion === 'function') {
    loadQuestion();
  }
}

// 4. Назначаем обработчики кликов
roButton.addEventListener('click', () => setLanguage('ro'));
enButton.addEventListener('click', () => setLanguage('en'));

// 5. Устанавливаем язык при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Проверяем, есть ли сохранённый язык, если нет - используем 'ro'
  const savedLang = localStorage.getItem('language') || 'ro';
  setLanguage(savedLang);
});