const dropdown = document.querySelector('.dropdown a');

dropdown.addEventListener('click', (event) => {
  event.preventDefault();

  const text = dropdown.querySelector('strong').textContent.trim();

  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = text;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      alert(`"${text}" has been copied to the clipboard.`);
    } else {
      throw new Error('Copy command unsuccessful.');
    }
  } catch (error) {
    console.error(`Unable to copy text: ${error}`);
  }

  document.body.removeChild(tempTextarea);
});
