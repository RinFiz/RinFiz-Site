const dropdown = document.querySelector('.dropdown a');

dropdown.addEventListener('click', (event) => {
  event.preventDefault();

  const text = dropdown.querySelector('strong').textContent.trim();

  const tempInput = document.createElement('input');
  tempInput.setAttribute('value', text);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert(`"${text}" has been copied to the clipboard.`);
});
