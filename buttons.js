const openProfileBtn = document.querySelector('.timer-page__button_profile');
const openManagerBtn = document.querySelector('.timer-page__button_menu');
const timer = document.querySelector('.page-main__timer');
const account = document.querySelector('.page-main__account');
const taskManager = document.querySelector('.page-main__task-manager');

function openProfile() {
    timer.classList.add('non-visible');
    account.classList.add('visible');
}

function openManager() {
    timer.classList.add('non-visible');
    taskManager.classList.add('visible');
}

openProfileBtn.addEventListener('click', openProfile);
openManagerBtn.addEventListener('click', openManager);
