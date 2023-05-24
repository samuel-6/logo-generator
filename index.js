const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');
const {generateSvg, writeSvgToFile} = require('./lib/svg');

const main = async () => {

    const {shape, shapeColor, text, textColor} = await inquirer.prompt([

        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Triangle', 'Circle', 'Square']
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color of the shape (color keyword or hexadecimal):',
          },
          {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: function(value) {
              if (value.length > 3) {
                return 'The logo text can contain up to 3 characters.';
              } else {
                return true;
              }
            },
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color of the text (color keyword or hexadecimal):',
          },

    ]);

    const shapeInstance = new {

        Triangle,
        Circle,
        Square,

    }[shape](shapeColor);

    const svgContent = generateSvg(shapeInstance, textColor, text);
    writeSvgToFile(svgContent);

}

main();