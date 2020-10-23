function submitAnswers() {
  const total = 5;
  let score = 0;

  let q1 = document.forms["quizForm"]["q1"].value;
  let q2 = document.forms["quizForm"]["q2"].value;
  let q3 = document.forms["quizForm"]["q3"].value;
  let q4 = document.forms["quizForm"]["q4"].value;
  let q5 = document.forms["quizForm"]["q5"].value;

  let answers = ["b", "a", "d", "b", "d"];

  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "")
      alert("you forgot to answer question", i);

    if (eval("q" + i) == answers[i - 1]) score++;
  }

  let result = document.getElementById("results");
  result.innerHTML = `<h3>you scored <span>${score}</span> out of<span>${total}</span></h3>`;
  alert(`you scored ${score} out of ${total}`);
  return false;
}
