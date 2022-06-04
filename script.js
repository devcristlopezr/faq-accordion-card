let questions = document.querySelectorAll('.question__header');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    answer = question.nextElementSibling;
    title = question.firstElementChild;
    icon = question.lastElementChild;
    icon.classList.toggle('flip-question-icon');
    title.classList.toggle('bold-question-label');
    answer.classList.toggle('active-question');
  });
});
