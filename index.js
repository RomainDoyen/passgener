const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

// app.set('view engine', 'ejs');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.static('styles'));
app.use(express.static('modules'));

app.get('/', (req, res) => {
    const python = spawn('python', ['./scripts/main.py']);
    let scriptOutput = "";

    python.stdout.on('data', (data) => {
        // console.log(`stdout: ${data}`);
        scriptOutput += data.toString();
    });

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    python.on('close', (code) => {
        // console.log(`child process exited with code ${code}`);
        res.render('index', { scriptOutput: scriptOutput });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
