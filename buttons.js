const openProfileBtn = document.querySelector('.timer-page__button_profile');
const openManagerBtn = document.querySelector('.timer-page__button_menu');
const closeAccountBtn = document.querySelector('.account__close-btn');
const closeManagerBtn = document.querySelector('.task-manager__close-btn');
const timer = document.querySelector('.page-main__timer');
const account = document.querySelector('.page-main__account');
const taskManager = document.querySelector('.page-main__task-manager');


openProfileBtn.addEventListener('click', openProfile);

function openProfile() {
    account.style.display = 'block';
    timer.style.display = 'none';
}


closeAccountBtn.addEventListener('click', closeAccount);

function closeAccount() {
    account.style.display = 'none';
    timer.style.display = 'block';
}

openManagerBtn.addEventListener('click', openManager);

function openManager() {
    timer.style.display = 'none';
    taskManager.style.display = 'block';
}

closeManagerBtn.addEventListener('click', closeManager);

function closeManager() {
    taskManager.style.display = 'none';
    timer.style.display = 'block';
}