const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;

    switch (value) {
      case 'C':
        display.value = '';
        break;

      case 'DEL':
        display.value = display.value.slice(0, -1);
        break;

      case '+/-':
        if (display.value) {
          if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
          } else {
            display.value = '-' + display.value;
          }
        }
        break;

      case '=':
        if (display.value) {
          try {
            // Replace display multiplication symbol with JavaScript operator
            let expression = display.value.replace(/×/g, '*');
            display.value = eval(expression);
          } catch (error) {
            display.value = 'Error';
          }
        }
        break;

      default:
        // Append clicked numbers or operators to display
        display.value += value;
        break;
    }
  });
});