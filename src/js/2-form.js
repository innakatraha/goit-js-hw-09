const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInputChange);
function onInputChange(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.email.value = parsedData.email || '';
  form.message.value = parsedData.message || '';
}
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  form.reset();
}
