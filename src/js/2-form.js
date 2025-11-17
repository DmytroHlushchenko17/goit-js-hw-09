const feedbackForm = document.querySelector('.js-feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFeedbackFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) return;

  formData = formDataFromLS;

  const formDataFromLSKeys = Object.keys(formDataFromLS);
  formDataFromLSKeys.forEach(key => {
    feedbackForm.elements[key].value = formDataFromLS[key];
  });
};

const onFeedbackFormInput = event => {
  const formField = event.target;
  const formFieldValue = formField.value.trim();
  const formFieldName = formField.name;

  formData[formFieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSudmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('«Fill please all fields»');
    return;
  }

  console.log(formData);

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};
fillFeedbackFormFields();

feedbackForm.addEventListener('input', onFeedbackFormInput);
feedbackForm.addEventListener('submit', onFeedbackFormSudmit);
