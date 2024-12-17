function validerQuiz() {
  let formValide = false;
  const formulaire = document.getElementById("quizzForm");
  const reponsesCorrectes = [
    { name: "q1", correctAnswer: "Brasilia" },
    { name: "q2", correctAnswer: "7" },
    { name: "q3", correctAnswer: "50" },
    { name: "q4", correctAnswer: "Mer des Philippines" },
    { name: "q5", correctAnswer: "Le Nil" },
    { name: "q6", correctAnswer: "Les Alpes" },
    { name: "q7", correctAnswer: "L'Antarctique" },
    { name: "q8", correctAnswer: "Rome" },
    { name: "q9", correctAnswer: "Russie" },
    { name: "q10", correctAnswer: "Chine" },
    { name: "q11", correctAnswer: "Lac Baïkal" },
    { name: "q12", correctAnswer: "Le Sahara" },
    { name: "q13", correctAnswer: "La Tamise" },
    { name: "q14", correctAnswer: "Mer Morte" },
    { name: "q15", correctAnswer: "Nouvelle-Guinée" },
  ];

  let score = 0;

  for (let i = 0; i < reponsesCorrectes.length; i++) {
    const question = reponsesCorrectes[i];
    const inputs = formulaire.elements[question.name];
    let reponseSelectionnee = null;

    if (inputs) {
      for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].checked) {
          reponseSelectionnee = inputs[j].value;
          break;
        }
      }

      if (reponseSelectionnee === question.correctAnswer) {
        score++;
      }
    }
  }
  formValide = true;
  const resultDiv = document.getElementById("result");
  if (formValide) {
    resultDiv.style.display = "inline";
    alert(`Vous avez scoré ${score} de ${reponsesCorrectes.length}`);
  }
}
