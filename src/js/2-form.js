import throttle from 'lodash/throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';

const formData = {
  email: "",
  message: "",
}

feedbackFormEl.addEventListener('input', throttle(onSaveFeedback, 500));
feedbackFormEl.addEventListener('submit', onSubmitFeedbackForm);

function onSaveFeedback(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function updateForm() {
  const localStorageData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (localStorageData) {
    feedbackFormEl.elements.email.value = localStorageData.email || '';
    feedbackFormEl.elements.message.value = localStorageData.message || '';
  }
}

updateForm();

function onSubmitFeedbackForm(event) {
  event.preventDefault();
  if(!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData); 
  localStorage.removeItem(LOCAL_KEY);
  feedbackFormEl.reset();

  formData.email = "";
  formData.message = "";
}