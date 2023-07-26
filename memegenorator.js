const form = document.getElementById('memeForm');
const memeContainer = document.getElementById('memeContainer');
const textColorInput = document.getElementById('textColor');
const colorPreview = document.getElementById('colorPreview');

function handleFormSubmit(event) {
  event.preventDefault();

  const imageURL = document.getElementById('imageURL').value;
  const topText = document.getElementById('topText').value;
  const bottomText = document.getElementById('bottomText').value;
  const textColor = textColorInput.value;

  const meme = document.createElement('div');
  meme.classList.add('meme');

  const memeImage = document.createElement('img');
  memeImage.src = imageURL;

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const memeTopText = document.createElement('p');
  memeTopText.classList.add('top-text');
  memeTopText.innerText = topText;
  memeTopText.style.color = textColor;
  memeTopText.style.fontWeight = 'bold'; 

  const memeBottomText = document.createElement('p');
  memeBottomText.classList.add('bottom-text');
  memeBottomText.innerText = bottomText;
  memeBottomText.style.color = textColor;
  memeBottomText.style.fontWeight = 'bold'; 

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', () => {
    meme.remove();
  });

  textContainer.appendChild(memeTopText);
  textContainer.appendChild(memeBottomText);

  meme.appendChild(memeImage);
  meme.appendChild(textContainer);
  meme.appendChild(removeButton);

  memeContainer.prepend(meme);

  document.getElementById('imageURL').value = '';
  document.getElementById('topText').value = '';
  document.getElementById('bottomText').value = '';
}

function handleTextColorChange() {
  const selectedColor = textColorInput.value;
  colorPreview.style.backgroundColor = selectedColor;
}

form.addEventListener('submit', handleFormSubmit);
textColorInput.addEventListener('input', handleTextColorChange);


handleTextColorChange();
