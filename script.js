const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let score = 0;

const nextButtons = document.querySelectorAll('.next');
nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide < slides.length) {
      slides[currentSlide].classList.add('active');
    }
    if (currentSlide === slides.length - 1) {
      document.getElementById('score').textContent = `Você acertou ${score} de ${slides.length - 1} perguntas.`;
    }
  });
});

const answerButtons = document.querySelectorAll('.answer');
answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('correct')) {
      score++;
    }
    // Desabilita todas as respostas após seleção
    const siblings = button.parentElement.querySelectorAll('.answer');
    siblings.forEach(sib => {
      sib.disabled = true;
      if (sib.classList.contains('correct')) {
        sib.style.backgroundColor = 'green';
      } else {
        sib.style.backgroundColor = 'red';
      }
    });
  });
});
