// 1
const backgroundInput = document.querySelector('#background-color-input');
const backgroundSubmit = document.querySelector('#background-color-button');

if (backgroundInput && backgroundSubmit) {
  backgroundSubmit.addEventListener('click', function() {
    backgroundSubmit.style.backgroundColor = backgroundInput.value;
  });
}

// 2
const fontSizeInput = document.querySelector('#paragraph-size-input');
const fontSizeParagraph = document.querySelector('#paragraph-size');

if (fontSizeInput && fontSizeParagraph) {
  fontSizeInput.addEventListener('input', function() {
    const parsedNumber = Number(fontSizeInput.value);
    const isNumber = !isNaN(parsedNumber);
    if (isNumber) {
      fontSizeParagraph.style.fontSize = fontSizeInput.value + 'px';
    } else {
      fontSizeParagraph.style.fontSize = '12px';
    }
  })
}

// 3
const coloredParagraph = document.querySelector('.paragraph-wrapper');
const coloredParagraphButton = document.querySelector('#color-paragraph-button');

if (coloredParagraph && coloredParagraphButton) {
  let clickCount = 0;
  coloredParagraphButton.addEventListener('click', function() {
    if (clickCount % 2 === 0) {
      coloredParagraph.style.color = 'green';
    } else {
      coloredParagraph.style.color = 'black';
    }
    clickCount = ++clickCount;
  })
}

// 4
const copyTextInput = document.querySelector('#input-click');
const buttonClick = document.querySelector('#input-click-button');

if (buttonClick && copyTextInput) {
  copyTextInput.addEventListener('focusout', function() {
    if (copyTextInput.value !== '') {
      buttonClick.innerText = copyTextInput.value;
    } else {
      buttonClick.innerText = 'Click';
    }
  })

  buttonClick.addEventListener('click', function() {
    buttonClick.innerText = 'Click';
    copyTextInput.value = '';
  })
}

// 5
const yellowButton = document.querySelector('#yellow-button');

if (yellowButton) {
  let clickCount = 0;
  yellowButton.addEventListener('click', function() {
    if (clickCount % 2 === 0) {
      yellowButton.style.backgroundColor = 'red';
    } else {
      yellowButton.style.backgroundColor = 'yellow';
    }
    clickCount = ++clickCount;
  })
}

// 6
const inputValue = document.querySelector('#input-value');
const inputChangeButton = document.querySelector('#input-change-button');

if (inputValue && inputChangeButton) {
  let clickCount = 0;

  inputChangeButton.addEventListener('click', function() {
    clickCount = ++clickCount;
    inputValue.value = clickCount;
  })
}

// 7
const buttonParagraph = document.querySelector('#button-paragraph');
const paragraphChangeButton = document.querySelector('#paragraph-change-button');
const secondParagraphChangeButton = document.querySelector('#second-paragraph-change-button');

if (buttonParagraph && secondParagraphChangeButton && paragraphChangeButton) {
  paragraphChangeButton.addEventListener('click', function() {
    buttonParagraph.innerText = 'Button 1 clicked';
  })
  secondParagraphChangeButton.addEventListener('click', function() {
    buttonParagraph.innerText = 'Button 2 clicked';
  })
}

// 8
const hoverInput = document.querySelector('#input-hover');

if (hoverInput) {
  hoverInput.addEventListener('mouseover', function() {
    hoverInput.value = 'The input is hovered over';
  })
  hoverInput.addEventListener('mouseout', function() {
    hoverInput.value = '';
  })
}
