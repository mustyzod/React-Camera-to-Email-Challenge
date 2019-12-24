const express = require('express');
const app = express();


const SendMailRoutes = require('./routes/api/SendMail');

// Use BodyParser
app.use(express.json({
    limit: '10mb',
}));
app.use(express.urlencoded({
    limit: '10mb',
    extended: true
}));

app.use(express.static('Images'));
// Routes
app.use('/api', SendMailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);