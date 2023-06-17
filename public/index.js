const socket = io();

$('input[type="text"]').on('input', function() {
  const data = {};

  $('input[type="text"]').each(function () {
    const id = $(this).attr('id');
    const value = $(this).val();
    data[id] = value;
  });

  $('input[type="checkbox"]').each(function () {
    const id = $(this).attr('id');
    const checked = $(this).is(':checked');
    data[id] = checked;
  });

  const lineNumbers = [];
  $('span.line-number').each(function() {
    lineNumbers.push($(this).text());
  });
  data.lineNumbers = lineNumbers;

  socket.emit('updateCheckbox', data);
});

$('input[type="checkbox"]').on('change', function() {
  const data = {};

  $('input[type="text"]').each(function () {
    const id = $(this).attr('id');
    const value = $(this).val();
    data[id] = value;
  });

  $('input[type="checkbox"]').each(function () {
    const id = $(this).attr('id');
    const checked = $(this).is(':checked');
    data[id] = checked;
  });

  const lineNumbers = [];
  $('span.line-number').each(function() {
    lineNumbers.push($(this).text());
  });
  data.lineNumbers = lineNumbers;

  socket.emit('updateCheckbox', data);
});