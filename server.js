const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.static('public'));

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/display', (req, res) => {
  res.sendFile(__dirname + '/public/display.html');
});

io.on('connection', (socket) => {
  console.log('user connected.');

  socket.on('updateCheckbox', (data) => {
    io.emit('updateCheckbox', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected.');
  });
});

const port = 5000;
http.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
