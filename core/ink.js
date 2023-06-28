file create logo.svg
const inquirer = require('inquirer');
const fs = require('fs');

const generatesvg = ({ initials, color, shape }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
  </head>
  </html>`;
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'initials',
      message: 'What initials would you like to use?',
    },
    {
      type: 'input',
      name: 'color',
      message: 'What color would you like?',
    
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please pick a shape',
      choices: [
        'circle',
        'square',
        'triangle',
      ],
    },
])
.then((answers) => {
  const htmlPageContent = generatesvg(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});
