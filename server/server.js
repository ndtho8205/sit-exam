const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
