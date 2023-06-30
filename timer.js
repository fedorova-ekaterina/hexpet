// Получаем необходимые элементы
const timeView = document.querySelector('.timer__time-view');
const startBtn = document.querySelector('.timer__start-btn');
const pauseBtn = document.querySelector('.timer__pause-btn');
const shortBreakBtn = document.querySelector('.timer__preset-btn_short-break');
const longBreakBtn = document.querySelector('.timer__preset-btn_long-break');
const focusBtn = document.querySelector('.timer__preset-btn_focus');

let timerInterval; // Переменная для хранения интервала таймера
let time = 1500; // Изначальное время в секундах (25 минут)

// Функция для обновления отображаемого времени
function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeView.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Функция для запуска таймера
function startTimer() {
  timerInterval = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(timerInterval);
      time = 0;
    }
    updateTimer();
  }, 1000);
}

// Функция для остановки таймера
function stopTimer() {
  clearInterval(timerInterval);
}

// Вызываем функцию для первоначального отображения времени
updateTimer();

// Функция для установки времени на короткий перерыв (5 минут)
function setShortBreakTime() {
  stopTimer();
  time = 300;
  updateTimer();
}

// Функция для установки времени на длинный перерыв (15 минут)
function setLongBreakTime() {
  stopTimer();
  time = 900;
  updateTimer();
}

// Функция для установки времени на фокус (25 минут)
function setFocusTime() {
  stopTimer();
  time = 1500;
  updateTimer();
}

// Обработчик клика на кнопку "Start"
startBtn.addEventListener('click', () => {
  startTimer();
  startBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
});

// Обработчик клика на кнопку "Stop"
pauseBtn.addEventListener('click', () => {
  stopTimer();
  pauseBtn.style.display = 'none';
  startBtn.style.display = 'block';
});

// Обработчик клика на кнопку "Short Break"
shortBreakBtn.addEventListener('click', () => {
  setShortBreakTime();
});

// Обработчик клика на кнопку "Long Break"
longBreakBtn.addEventListener('click', () => {
  setLongBreakTime();
});

// Обработчик клика на кнопку "Focus"
focusBtn.addEventListener('click', () => {
  setFocusTime();
});
