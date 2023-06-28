const inquirer = require('inquirer');

// Prompt the user for logo details
inquirer
  .prompt([
    {
      type: 'input',
      name: 'initials',
      message: 'Enter the initials (up to 3 characters):',
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter up to 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'txtColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select the shape:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color:',
    },
  ])
  .then((answers) => {
    // Call the createLogo function with the provided answers
    const logoSvg = createLogo(answers.initials, answers.txtColor, answers.shape, answers.color);
    console.log(logoSvg);
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });

// Function to create the logo based on the provided parameters
function createLogo(initials, txtColor, shape, color) {
  // Code to generate the SVG logo based on the parameters
  // ...
}
