let element = document.querySelector('#target');
const leftElements = document.querySelectorAll(".img_anime-left");
const rightElements = document.querySelectorAll(".img_anime-right");
let clear = true; // для проверки, чтобы вызывать меньше кода

let Visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    showAnimation();
  } else {
    // Если элемент не видно, то запускаем этот код
    clearAnimation();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

function showAnimation() {
    if(clear){
        rightElements.forEach(item => {
            item.classList.add('img_anime-right');
        });
        leftElements.forEach(item => {
            item.classList.add('img_anime-left');
        });
        clear = false;
    }
}

function clearAnimation() {
    if(!clear) {
        rightElements.forEach(item => {
            item.classList.remove('img_anime-right');
        });
        leftElements.forEach(item => {
            item.classList.remove('img_anime-left');
        });
        clear = true;
    }

}

Visible (element);