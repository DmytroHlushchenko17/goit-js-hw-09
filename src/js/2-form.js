const feedbackForm = document.querySelector('.js-feedback-form');

let formDate = {
  email: '',
  message: '',
};

const fillFeedbackFormFields = () => {
  const formDateFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDateFromLS === null) {
    return;
  }

  formDate = formDateFromLS;

  const formDataFromLSKeys = Object.keys(formDateFromLS);
  formDataFromLSKeys.forEach(key => {
    feedbackForm.elements[key].value = formDateFromLS[key];
  });
};

const onFeedbackFormInput = event => {
  const formField = event.target;
  const formFieldValue = formField.value.trim();
  const formFieldName = formField.name;

  formDate[formFieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
};

const onFeedbackFormSudmit = event => {
  event.preventDefault();
  if (formDate.email === '' || formDate.message === '') {
    alert('«Fill please all fields»');
    return;
  }

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackForm.addEventListener('input', onFeedbackFormInput);
feedbackForm.addEventListener('submit', onFeedbackFormSudmit);
