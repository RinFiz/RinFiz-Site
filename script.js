const dropdown = document.querySelector('.dropdown a');

dropdown.addEventListener('click', (event) => {
  event.preventDefault();

  const text = dropdown.querySelector('strong').textContent.trim();

  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = text;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999);

  document.execCommand('copy');
  document.body.removeChild(tempTextarea);

  alert(`"${text}" has been copied to the clipboard.`);
});
