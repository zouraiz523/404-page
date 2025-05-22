let isRed = true;

const lightUp = () => {
  const b = document.body;
  if (isRed) {
    b.classList.remove('light-up-blue');
    b.classList.add('light-up-red');
  } else {
    b.classList.remove('light-up-red');
    b.classList.add('light-up-blue');
  }
  isRed = !isRed;
};

setInterval(lightUp, 700);
