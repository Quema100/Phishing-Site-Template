const express = require('express');
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
.get((req, res)=>{
})
.post((req, res)=>{
})

app.route('/session')
.get((req, res)=>{
})
.post((req, res)=>{
})

app.get('/', (req, res) => {
    res.redirect('https://example.com');
});

const server = app.listen(port, '0.0.0.0', () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
});