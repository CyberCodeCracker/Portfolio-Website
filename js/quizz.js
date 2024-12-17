function validerQuiz() {
  const formulaire = document.getElementById("quizForm");
  const questions = [
    { question: "q1", reponseCorrecte: "Brasilia" },
    { question: "q2", reponseCorrecte: "7" },
    { question: "q3", reponseCorrecte: "50" },
    { question: "q4", reponseCorrecte: "Mer Méditerranée" },
    { question: "q5", reponseCorrecte: "Le Nil" },
    { question: "q6", reponseCorrecte: "Les Alpes" },
    { question: "q7", reponseCorrecte: "L'Antarctique" },
    { question: "q8", reponseCorrecte: "Rome" },
    { question: "q9", reponseCorrecte: "Russie" },
    { question: "q10", reponseCorrecte: "Chine" },
    { question: "q11", reponseCorrecte: "Lac Baïkal" },
    { question: "q12", reponseCorrecte: "Sahara" },
    { question: "q13", reponseCorrecte: "La Tamise" },
    { question: "q14", reponseCorrecte: "Mer Morte" },
    { question: "q15", reponseCorrecte: "Madagascar" },
  ];

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const reponseSelectionnee = formulaire.querySelector(
      `input[name="${question.question}"]:checked`,
    );

    if (
      reponseSelectionnee &&
      reponseSelectionnee.value === question.reponseCorrecte
    ) {
      score++;
      afficherReponse(question.question, question.reponseCorrecte, true);
    } else {
      afficherReponse(question.question, question.reponseCorrecte, false);
    }
  }

  alert(`Vous avez scoré ${score} de ${questions.length}`);
}

function afficherReponse(nomQuestion, reponseCorrecte, estCorrect) {
  const elementsQuestion = document.querySelectorAll(
    `input[name="${nomQuestion}"]`,
  );
  elementsQuestion.forEach(function (option) {
    const label = option.closest("label");

    if (option.value === reponseCorrecte) {
      label.style.color = "green"; // Réponse correcte
    } else if (!estCorrect && option.checked) {
      label.style.color = "red"; // Réponse incorrecte
    } else {
      label.style.color = "black"; // Réponses non sélectionnées ou non mises en évidence
    }
  });
}
