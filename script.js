const dropdown = document.querySelector('.wrapper .dropdown a');

dropdown.addEventListener('click', (event) => {
  console.log('Dropdown clicked'); // Add this line
  event.preventDefault();

  const text = dropdown.querySelector('strong').textContent.trim();

  const tempElement = document.createElement('textarea');
  tempElement.value = text;
  document.body.appendChild(tempElement);

  tempElement.select();
  document.execCommand('copy');

  document.body.removeChild(tempElement);

  alert(`"${text}" has been copied to the clipboard.`);
});
