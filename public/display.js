const socket = io();

socket.on('updateCheckbox', (data) => {
  $('#checkboxList').empty();

  const lineNumbers = data.lineNumbers;

  for (const key in data) {
    if (data.hasOwnProperty(key) && key.includes('checkbox')) {
      const checkboxId = key.replace('checkbox', '');
      const textBoxValue = data[`textBox${checkboxId}`];

      if (data[key]) {
        const lineNumber = lineNumbers[checkboxId - 1];
        const outputField = `<div><span class="line-number">${lineNumber}</span>${textBoxValue}</div>`;
        $('#checkboxList').append(outputField);
      }
    }
  }
});