'use strict';

const message = document.querySelector('.message');
const avatar = document.querySelector('.avatar');

function openAvatar() {
  avatar.classList.add('avatar--show');
  avatar.classList.remove('avatar--hide');
}

function openMessage() {
  message.classList.add('message--show');
  message.classList.remove('message--hide');
}

function closeMessage() {
  message.classList.add('message--hide');
  message.classList.remove('message--show');
}

setTimeout(openAvatar, 2000);
setTimeout(openMessage, 5000);
setTimeout(closeMessage, 10000);
