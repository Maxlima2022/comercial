const boxElement = document.getElementById('box');

setInterval(() => {
  boxElement.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    boxElement.style.transform = 'translateY(0)';
  }, 500);
}, 3000);


