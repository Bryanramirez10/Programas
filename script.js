const urlSearchParams = new URLSearchParams(window.location.search);

const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('close-paper');
  paperElement.classList.add('open-paper');
  
  const heartElement = document.querySelector('.heart');
  heartElement.style.display = 'block';
  
  setTimeout(() => {
    coverElement.style.display = 'none';
    heartElement.style.display = 'none';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.display = 'block';
    coverElement.style.zIndex = 1;
    coverElement.classList.remove('open-cover');
  }, 500);
});
