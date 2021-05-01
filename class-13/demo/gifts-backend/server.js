const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.send('gifts'));

app.listen(3001, () => console.log('listening on 3001'));
