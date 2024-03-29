import './styles.scss';
import 'bootstrap';
import * as yup from 'yup';
import initView from './view.js';

const inputLink = document.querySelector('.input');
const form = document.querySelector('form');
const feedback = document.querySelector('.feedback');
const links = [];

const inputRefresh = () => {
  inputLink.value = '';
  inputLink.style.border = '';
  feedback.textContent = '';
  form.reset();
  inputLink.focus();
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const url = inputLink.value;

  const validationSchema = yup
    .string()
    .url('Ссылка должна быть валидным URL-адресом')
    .notOneOf(links, 'Ссылка уже добавлена');
  validationSchema
    .validate(url)
    .then(() => {
      links.push(url);
      console.log('Ссылка валидна');
      inputRefresh();
      feedback.textContent = 'Ссылка добавлена';
      inputLink.style.border = '2px solid green';
    })
    .catch((error) => {
      console.log(error);
      inputLink.style.border = '2px solid red';
      feedback.textContent = error.message;
    });
};

form.addEventListener('submit', handleFormSubmit);
inputRefresh();
initView(links);
