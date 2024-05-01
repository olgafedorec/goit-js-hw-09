import throttle from 'lodash/throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

const formData = {
  email: "",
  message: "",
}

feedbackFormEl.addEventListener('input', throttle(onSaveFeedback, 500));
feedbackFormEl.addEventListener('submit', onSubmitFeedbackForm);

loadFormDataFromLocalStorage();

function onSaveFeedback(event) {
  formData[event.target.name] = event.target.value;
  saveFormDataToLocalStorage();
}

function loadFormDataFromLocalStorage() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
  formData.email = savedFormData.email || '';
  formData.message = savedFormData.message || '';
  updateForm();
}

function updateForm() {
  feedbackFormEl.elements.email.value = formData.email;
  feedbackFormEl.elements.message.value = formData.message;
}

function saveFormDataToLocalStorage() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onSubmitFeedbackForm(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_KEY);

  formData.email = "";
  formData.message = "";
  feedbackFormEl.reset();
}




