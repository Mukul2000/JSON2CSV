const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());



const CONNECTION_URL = 'mongodb+srv://adminKC:KarmaCircles@cluster0.tf8rc.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL,  {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
.then(() => app.listen(8000, () => console.log(`Server started on port ${PORT}`)))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);